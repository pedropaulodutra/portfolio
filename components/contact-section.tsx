"use client"

import type React from "react"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    const form = e.target as HTMLFormElement
  
    emailjs
    .sendForm("service_nyiderb", "template_wxr7uag", form, "totWYxQ2MkcL_n-5t")
    .then(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      form.reset()
    })
    .catch((error) => {
      setIsSubmitting(false)
      console.error("Erro ao enviar a mensagem:", error.text)
      alert(`Erro ao enviar a mensagem: ${error.text}`)
    })
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Entre em contato</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Estou sempre aberto a novas oportunidades, colaborações ou apenas um bate-papo amigável sobre dados e desenvolvimento.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href="mailto:pedrodutra0116@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        pedrodutra0116@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <a href="tel:+5524993197746" className="text-muted-foreground hover:text-primary transition-colors">
                        +55 (24) 99319-7746
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Localização</h3>
                      <p className="text-muted-foreground">Petrópolis - RJ</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="font-medium mb-2">Horário de trabalho</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>Com horário marcado</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <h3 className="text-xl font-bold mb-2">Envie uma mensagem</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      Preencha o formulário e retornarei o mais rápido possível.
                    </p>
                  </div>
                  <div className="p-6">
                    {isSubmitted ? (
                      <div className="h-full flex flex-col items-center justify-center text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                          <Send className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Mensagem enviada</h3>
                        <p className="text-muted-foreground">
                          Obrigado por entrar em contato. Retornarei em breve.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium">
                              Nome
                            </label>
                            <Input
                              id="first-name"
                              name="user_name"
                              placeholder="Digite seu nome..."
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium">
                              Sobrenome
                            </label>
                            <Input
                              id="last-name"
                              name="user_lastname" 
                              placeholder="Digite seu sobrenome..."
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="user_email"
                            type="email"
                            placeholder="Digite seu email..."
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Assunto
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Digite o assunto do projeto"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Mensagem
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Me conte um pouco mais sobre seu projeto..."
                            className="min-h-[120px]"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Enviar mensagem
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
