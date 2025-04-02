"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    let animationFrameId: number
    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(var(--primary), 0.1)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <section className="pt-6 relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="px-4 py-1.5 text-base font-medium">Data Analyst & Frontend Developer</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight">
            Transformando <span className="text-primary">dados</span> em experiências{" "}
            <span className="text-primary">incríveis</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Combino pensamento analítico com design criativo para desenvolver aplicações orientadas por dados que são tanto intuitivas quanto envolventes.
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-4 pt-6 items-center">
          <Button
            size="lg"
            className="rounded-full px-8 flex items-center gap-2"
            asChild
          >
            <a href="#about">
              <ArrowDown className="h-6 w-6 animate-bounce" />
              
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Download CV
          </Button>
        </div>
        </div>
      </div>
    </section>
  )
}

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.color = "rgba(var(--primary), 0.7)"
  }

  update() {
    // Bounce off edges
    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX = -this.speedX
    }

    if (this.y > this.canvas.height || this.y < 0) {
      this.speedY = -this.speedY
    }

    // Update position
    this.x += this.speedX
    this.y += this.speedY
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

