"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { AnimatedSection } from "@/components/motion"
import { siteConfig, getPhoneUrl, getEmailUrl } from "@/lib/config"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: siteConfig.social.twitter, icon: Twitter, label: "Twitter" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.replace("#", ""))
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-semibold text-foreground">{siteConfig.name}</span>
              </Link>
              <p className="text-muted-foreground max-w-sm mb-6">
                {siteConfig.description}
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a 
                    href={getEmailUrl()} 
                    className="hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={getPhoneUrl()} 
                    className="hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </li>
                <li>{siteConfig.location.country}</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
