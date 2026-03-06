"use client"

import { Rocket, Store, Briefcase, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, AnimatedItem, scaleUpVariants } from "@/components/motion"

const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Launch faster with MVPs, scalable architecture, and growth-ready platforms."
  },
  {
    icon: Store,
    title: "Local Businesses",
    description: "Establish your digital presence with professional websites and automation."
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Streamline your practice with custom tools, booking systems, and portfolios."
  },
  {
    icon: Building2,
    title: "Organizations",
    description: "Transform operations with enterprise solutions, integrations, and AI."
  }
]

export function WhoWeHelp() {
  return (
    <section 
      id="who-we-help" 
      className="py-20 md:py-28"
      aria-labelledby="who-we-help-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Who We Serve
          </span>
          <h2 
            id="who-we-help-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Built for builders like you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Whether you&apos;re just starting or scaling up, we have the expertise to support your journey.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <AnimatedItem key={audience.title} variants={scaleUpVariants}>
              <Card className="group h-full border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <audience.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {audience.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
