import type { Metadata } from "next"
import { LegalPage } from "@/components/forge/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service | Forge Studio",
  description: "The terms that apply when you work with Forge Studio.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Service | Forge Studio", url: "/terms", images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Forge Studio" }] },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="November 19, 2026"
      intro="These terms apply to website projects and Local Presence plans with Forge Studio. Your written proposal sets out the specifics of your project; if it and these terms ever differ, the proposal wins."
      sections={[
        {
          heading: "Your proposal",
          body: [
            "Before any work is billed, we agree the scope, price, payment schedule and timeline in a written proposal.",
          ],
        },
        {
          heading: "Timelines",
          body: [
            "Delivery times run from the day we have both your content and your payment, as described in your proposal.",
          ],
        },
        {
          heading: "Revisions and later changes",
          body: [
            "One round of revisions is included in every plan. After launch, your first 30 days of updates are included. After that, each change request is $25, and several small edits sent together count as one request. New pages or features are quoted before we start them.",
          ],
        },
        {
          heading: "Local Presence plans",
          body: [
            "Your Google Business Profile itself is free; the monthly fee is for our work managing it, and it appears on every invoice. You stay the owner of your profiles and add us as a manager. We never ask for your password. Review replies on Google are posted only with your approval. Either side can end the plan with 30 days' notice. When it ends, we hand everything back and remove our access within 7 business days. We can't guarantee rankings or appearing in Search or Maps.",
          ],
        },
        {
          heading: "Ownership",
          body: [
            "Once your project is paid in full, your site, its code and your domain are yours. There are no lock-in contracts.",
          ],
        },
        {
          heading: "Your content",
          body: [
            "You confirm that you have the right to use the text, photos and logos you send us for your site.",
            "We will ask your permission before featuring your site in our portfolio.",
          ],
        },
        {
          heading: "Third-party services",
          body: [
            "Domains, booking systems, payment processors and hosting are provided by third parties under their own terms. We set them up and connect them, but we don't control their availability or pricing.",
          ],
        },
        {
          heading: "Results",
          body: [
            "We build every site to help you get found and contacted, but we can't guarantee specific search rankings, traffic or sales.",
          ],
        },
      ]}
    />
  )
}
