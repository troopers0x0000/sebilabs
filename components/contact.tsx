"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, Send, CheckCircle, Loader2 } from "lucide-react"
import { AnimatedSection, StaggerContainer, AnimatedItem, scaleUpVariants } from "@/components/motion"
import { createClient } from "@/lib/supabase/client"

const services = [
  { value: "web-platforms", label: "Web Platforms" },
  { value: "automation-ai", label: "Automation & AI" },
  { value: "digital-infrastructure", label: "Digital Infrastructure" },
  { value: "other", label: "Other / Not Sure" },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string || null,
      service_interest: formData.get("service") as string || null,
      message: formData.get("message") as string,
    }

    try {
      const supabase = createClient()
      const { error: dbError } = await supabase.from("leads").insert([data])

      if (dbError) throw dbError

      setIsSubmitted(true)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 
            id="contact-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Ready to build something?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company (optional)"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select name="service" disabled={isSubmitting}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-destructive" role="alert">
                        {error}
                      </p>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <AnimatedSection className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Or reach out directly
              </h3>
              <p className="text-muted-foreground">
                Prefer a quick chat? Contact us through any of these channels and we&apos;ll respond as soon as possible.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-4">
              <AnimatedItem variants={scaleUpVariants}>
                <a
                  href="https://wa.me/+91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                  </div>
                </a>
              </AnimatedItem>

              <AnimatedItem variants={scaleUpVariants}>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 XXX XXX XXXX</p>
                  </div>
                </a>
              </AnimatedItem>

              <AnimatedItem variants={scaleUpVariants}>
                <a
                  href="mailto:hello@sebilabs.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@sebilabs.com</p>
                  </div>
                </a>
              </AnimatedItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
