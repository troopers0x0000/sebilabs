/**
 * Site Configuration
 * Update these values before deploying to production
 */

export const siteConfig = {
  name: "Sebilabs",
  tagline: "We help businesses grow with technology",
  description: "Sebilabs is a technology studio that helps businesses apply modern tools — from web platforms to AI automation — to unlock growth.",
  url: "https://sebilabs.com",
  
  // Contact Information - UPDATE THESE BEFORE PRODUCTION
  contact: {
    phone: "+919876543210", // Update with real phone number
    phoneDisplay: "+91 98765 43210", // Formatted for display
    email: "hello@sebilabs.com",
    whatsappMessage: "Hello Sebilabs, I would like to discuss a project.",
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
