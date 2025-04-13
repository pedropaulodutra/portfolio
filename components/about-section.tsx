"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function AboutSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <DataVisualizationSVG />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-lg border w-64">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Disponível</span>
              </div>
              <div className="text-sm text-muted-foreground">Rio de Janeiro - Brasil</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Sobre mim</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
            </div>

            <p className="text-muted-foreground">
              Sou um analista de dados e desenvolvedor frontend com um forte interesse em inteligência artificial e seu impacto nos negócios. Minha experiência combina análise de dados, ciência de dados e desenvolvimento web, permitindo-me criar aplicações que transformam dados brutos em insights acionáveis e interfaces intuitivas.
            </p>

            <p className="text-muted-foreground">
              Minha trajetória inclui uma base sólida em programação e dados. Atualmente, estou me aprofundando em aprendizado de máquina, bancos de dados e visualização de dados, sempre buscando aprimorar minhas habilidades para impulsionar tomadas de decisão mais inteligentes e eficientes.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-primary mr-2" />
                <span>Experiência em análise de dados e desenvolvimento frontend</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-primary mr-2" />
                <span>Conhecimento em Python, Pandas, SQL e visualização de dados</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-primary mr-2" />
                <span>Graduando em Análise e Desenvolvimento de Sistemas na Uninter</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-primary mr-2" />
                <span>Em preparação para a certificação DP-203 da Microsoft</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function DataVisualizationSVG() {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />
      <circle cx="200" cy="200" r="100" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
      <circle cx="200" cy="200" r="50" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />

      <circle cx="200" cy="50" r="10" fill="currentColor" className="text-primary" />
      <circle cx="350" cy="200" r="10" fill="currentColor" className="text-primary" />
      <circle cx="200" cy="350" r="10" fill="currentColor" className="text-primary" />
      <circle cx="50" cy="200" r="10" fill="currentColor" className="text-primary" />

      <circle cx="275" cy="75" r="8" fill="currentColor" className="text-primary/80" />
      <circle cx="325" cy="125" r="8" fill="currentColor" className="text-primary/80" />
      <circle cx="325" cy="275" r="8" fill="currentColor" className="text-primary/80" />
      <circle cx="275" cy="325" r="8" fill="currentColor" className="text-primary/80" />
      <circle cx="125" cy="325" r="8" fill="currentColor" className="text-primary/80" />
      <circle cx="75" cy="275" r="8" fill="currentColor" className="text-primary/80" />
      <circle cx="75" cy="125" r="8" fill="currentColor" className="text-primary/80" />
      <circle cx="125" cy="75" r="8" fill="currentColor" className="text-primary/80" />

      <line x1="200" y1="50" x2="275" y2="75" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="275" y1="75" x2="325" y2="125" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="325" y1="125" x2="350" y2="200" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="350" y1="200" x2="325" y2="275" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="325" y1="275" x2="275" y2="325" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="275" y1="325" x2="200" y2="350" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="200" y1="350" x2="125" y2="325" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="125" y1="325" x2="75" y2="275" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="75" y1="275" x2="50" y2="200" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="50" y1="200" x2="75" y2="125" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="75" y1="125" x2="125" y2="75" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="125" y1="75" x2="200" y2="50" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />

      <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="125" y1="75" x2="275" y2="325" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="75" y1="125" x2="325" y2="275" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="75" y1="275" x2="325" y2="125" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="125" y1="325" x2="275" y2="75" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  )
}

