"use client"

import { Globe, Bot, Server, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, AnimatedItem, scaleUpVariants } from "@/components/motion"

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Custom websites, web apps, and e-commerce platforms built for performance and scale.",
    features: ["Custom Development", "E-commerce", "Web Applications"]
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description: "Streamline operations with intelligent automation and AI-powered solutions.",
    features: ["Process Automation", "AI Integration", "Chatbots & Agents"]
  },
  {
    icon: Server,
    title: "Digital Infrastructure",
    description: "Reliable hosting, cloud setup, and technical foundations for your business.",
    features: ["Cloud Setup", "DevOps", "Maintenance"]
  }
]

export function Services() {
  return (
    <section 
      id="services" 
      className="py-20 md:py-28 bg-muted/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            What We Do
          </span>
          <h2 
            id="services-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Services tailored to your growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From concept to deployment, we provide end-to-end solutions that help your business thrive in the digital age.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <AnimatedItem key={service.title} variants={scaleUpVariants}>
              <Card className="group h-full border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowRight className="h-3 w-3 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
