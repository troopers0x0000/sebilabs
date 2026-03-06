"use client"

import { AnimatedSection, StaggerContainer, AnimatedItem, fadeUpVariants } from "@/components/motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and challenges through in-depth conversations."
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create a tailored roadmap with clear milestones and deliverables."
  },
  {
    number: "03",
    title: "Build",
    description: "Our team develops your solution with regular updates and feedback loops."
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy, optimize, and provide ongoing support for your success."
  }
]

export function Process() {
  return (
    <section 
      id="process" 
      className="py-20 md:py-28 bg-muted/30"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            How We Work
          </span>
          <h2 
            id="process-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            A simple, transparent process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From first conversation to final delivery, we keep you informed and involved every step of the way.
          </p>
        </AnimatedSection>

        <StaggerContainer className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div 
            className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-border"
            aria-hidden="true"
          />
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step) => (
              <AnimatedItem key={step.number} variants={fadeUpVariants}>
                <div className="relative flex gap-6 md:gap-8 items-start group">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
