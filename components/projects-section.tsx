"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projects = [
    {
      title: "Redesign Nubank",
      description: "Uma nova identidade visual para o Nubank, combinando modernidade e simplicidade para uma experiência mais envolvente.",
      image: "/nubank.svg?height=600&width=800",
      tags: ["HTML", "CSS", "JavaScript", "SASS"],
      demoUrl: "https://projeto-nubank-chi.vercel.app",
      repoUrl: "https://github.com/PedroDutra86/Projeto_Nubank",
      featured: true,
    },
    {
      title: "E-commerce User Behavior Analysis",
      description: "Analysis of user behavior patterns to optimize conversion rates and improve user experience.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "Pandas", "Tableau", "SQL"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Stream Biz",
      description: "O Stream Biz é um aplicativo em Streamlit focado em estudos, que analisa os dados de fechamento de ações desde 1º de janeiro de 2010. Os usuários podem explorar tendências históricas e realizar análises básicas do desempenho das ações ao longo do tempo, sendo ideal para aprendizado e experimentação com dados financeiros.",
      image: "/hdi.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Chart.js", "API"],
      demoUrl: "https://streambiz.streamlit.app/",
      repoUrl: "https://github.com/PedroDutra86/StreamBiz",
      featured: true,
    },
    {
      title: "Market Trend Predictor",
      description: "Machine learning model to predict market trends with an intuitive frontend interface.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "TensorFlow", "React", "API"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Customer Segmentation Tool",
      description: "Interactive tool for segmenting customers based on behavior and demographics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["R", "Shiny", "SQL", "Clustering"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Social Media Analytics Platform",
      description: "Comprehensive platform for tracking and analyzing social media performance metrics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "API"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Projetos</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Uma seleção do meu trabalho recente abrangendo análise de dados e desenvolvimento frontend. Cada projeto demonstra minha abordagem para resolver problemas complexos.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 ${index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr] md:flex-row-reverse"} gap-10 items-center`}
              >
                <div className={`space-y-4 ${index % 2 !== 0 && "md:order-2"}`}>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button asChild size="sm">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div
                  className={`relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl ${index % 2 !== 0 && "md:order-1"}`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
        </motion.div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Other Projects</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="group relative bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="sm" variant="secondary" asChild className="rounded-full">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="rounded-full">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

