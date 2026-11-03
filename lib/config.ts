/**
 * Site Configuration
 * Update these values before deploying to production
 */

export const siteConfig = {
  name: "Sebilabs",
  tagline: "Build smarter. Move faster. Grow with confidence.",
  description: "Sebilabs is a technology partner for ambitious businesses. We design fast websites, automate repetitive work, and create reliable digital systems that turn ideas into momentum.",
  url: "https://sebilabs.com",
  
  // Contact Information - UPDATE THESE BEFORE PRODUCTION
  contact: {
    phone: "+9162516547",
    phoneDisplay: "+91 62516 547",
    email: "hello@sebilabs.com",
    whatsappMessage: "Hi Sebilabs, I would like to discuss a project for my business.",
  },

  // Social Links - UPDATE THESE BEFORE PRODUCTION  
  social: {
    twitter: "https://twitter.com/sebilabs",
    linkedin: "https://linkedin.com/company/sebilabs",
    github: "https://github.com/sebilabs",
  },

  // Location
  location: {
    country: "India",
    countryCode: "IN",
  },

  // Business Info
  business: {
    foundingYear: "2024",
    availableLanguages: ["English", "Hindi"],
  },
} as const

// Helper function to generate WhatsApp URL
export function getWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(customMessage || siteConfig.contact.whatsappMessage)
  return `https://wa.me/${siteConfig.contact.phone}?text=${message}`
}

// Helper function to generate phone URL
export function getPhoneUrl() {
  return `tel:${siteConfig.contact.phone}`
}

// Helper function to generate email URL
export function getEmailUrl(subject?: string) {
  const base = `mailto:${siteConfig.contact.email}`
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base
}
