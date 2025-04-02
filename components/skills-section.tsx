"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Code, LineChart, Layers, Palette, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skills = [
    {
      title: "Análise de Dados",
      description: "Transformo dados brutos em insights claros.",
      icon: <Database className="h-10 w-10" />,
      items: [
        { name: "Python", level: 80 },
        { name: "R", level: 20 },
        { name: "SQL", level: 54 },
        { name: "Pandas", level: 75 },
      ],
    },
    {
      title: "Desenvolvimento Frontend",
      description: "Crio interfaces elegantes, responsivas e acessíveis.",
      icon: <Code className="h-10 w-10" />,
      items: [
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 50 },
        { name: "React", level: 65 },
        { name: "Next.js", level: 60 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "Visualização de Dados",
      description: "Transformo dados em visualizações claras e impactantes",
      icon: <LineChart className="h-10 w-10" />,
      items: [
        { name: "Streamlit", level: 60 },
        { name: "Matplotlib", level: 60 },
        { name: "Plotly", level: 50 },
        { name: "Power BI", level: 70 },
      ],
    },
    {
      title: "Desenvolvimento Backend",
      description: "Desenvolvo aplicações robustas no lado do servidor",
      icon: <Layers className="h-10 w-10" />,
      items: [
        { name: "Node.js", level: 70 },
        { name: "Python", level: 80 },
        { name: "Java", level: 40 },
        { name: "Azure", level: 60 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      title: "UI/UX Design",
      description: "Crio experiências para o usuário intuitivas e envolventes",
      icon: <Palette className="h-10 w-10" />,
      items: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 60 },
        { name: "Wireframe", level: 85 },
        { name: "Protótipo", level: 80 },
      ],
    },
    {
      title: "Tecnologias Web",
      description: "Aproveito tecnologias e ferramentas web modernas",
      icon: <Globe className="h-10 w-10" />,
      items: [
        { name: "REST APIs", level: 40 },
        { name: "Git", level: 70 },
        { name: "CI/CD", level: 40 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Minhas Habilidades</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Desenvolvi um conjunto diversificado de habilidades em análise de dados e desenvolvimento frontend, permitindo-me criar soluções abrangentes baseadas em dados.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-muted-foreground">{item.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + itemIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

