import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: 'Sebilabs - We help businesses grow with technology',
    template: '%s | Sebilabs'
  },
  description: 'Sebilabs is a technology studio that helps businesses apply modern tools — from web platforms to AI automation — to unlock growth.',
  keywords: ['technology studio', 'web development', 'AI automation', 'digital infrastructure', 'startup', 'India', 'custom software', 'business automation'],
  authors: [{ name: 'Sebilabs' }],
  creator: 'Sebilabs',
  publisher: 'Sebilabs',
  metadataBase: new URL('https://sebilabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sebilabs.com',
    siteName: 'Sebilabs',
    title: 'Sebilabs - We help businesses grow with technology',
    description: 'Sebilabs helps businesses apply modern tools — from web platforms to AI automation — to unlock growth.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sebilabs - Technology Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebilabs - We help businesses grow with technology',
    description: 'Sebilabs helps businesses apply modern tools — from web platforms to AI automation — to unlock growth.',
    images: ['/og-image.jpg'],
    creator: '@sebilabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sebilabs',
  description: 'Technology studio helping businesses grow with web platforms, AI automation, and digital infrastructure.',
  url: 'https://sebilabs.com',
  logo: 'https://sebilabs.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://twitter.com/sebilabs',
    'https://linkedin.com/company/sebilabs',
    'https://github.com/sebilabs',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: 'Sebilabs Team',
  },
  foundingDate: '2024',
  areaServed: 'IN',
  serviceType: ['Web Development', 'AI Automation', 'Digital Infrastructure'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
