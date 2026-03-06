import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using Sebilabs services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Button variant="ghost" asChild className="mb-8 gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing our website or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Sebilabs provides technology consulting and development services including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Web platform development and design</li>
              <li>AI and automation solutions</li>
              <li>Digital infrastructure setup and management</li>
              <li>Technology consulting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Project Agreements</h2>
            <p className="text-muted-foreground">
              All projects are governed by individual agreements that outline scope, timeline, deliverables, and payment terms. These agreements are separate from and in addition to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              Upon full payment, clients receive ownership of custom work created specifically for their project. We retain the right to use general techniques, knowledge, and non-confidential elements in future projects. Our proprietary tools, frameworks, and methodologies remain our property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Confidentiality</h2>
            <p className="text-muted-foreground">
              We treat all client information as confidential. We will not disclose your business information, project details, or any sensitive data to third parties without your explicit consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Sebilabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be resolved in the courts of India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:hello@sebilabs.com" className="text-primary hover:underline">
                hello@sebilabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
