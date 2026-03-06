"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, AnimatedItem, scaleUpVariants } from "@/components/motion"

const testimonials = [
  {
    quote: "Sebilabs transformed our online presence completely. Their team understood our vision and delivered beyond expectations. The website they built has significantly increased our customer inquiries.",
    author: "Priya Sharma",
    role: "Founder",
    company: "GreenLeaf Organics"
  },
  {
    quote: "The automation solutions they implemented saved us countless hours every week. Their AI chatbot handles 70% of our customer queries automatically. Highly recommend their services!",
    author: "Rahul Menon",
    role: "Operations Head",
    company: "TechVentures India"
  },
  {
    quote: "Working with Sebilabs was seamless from start to finish. They took care of everything from design to deployment, and their ongoing support has been exceptional.",
    author: "Anita Desai",
    role: "Director",
    company: "Wellness First Clinic"
  }
]

export function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 
            id="testimonials-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Trusted by businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See what our clients have to say about working with us.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedItem key={index} variants={scaleUpVariants}>
              <Card className="h-full border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" aria-hidden="true" />
                  <blockquote className="text-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <cite className="not-italic font-medium text-foreground">
                        {testimonial.author}
                      </cite>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
