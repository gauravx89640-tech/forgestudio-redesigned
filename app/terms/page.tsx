import type { Metadata } from "next"
import { LegalPage } from "@/components/forge/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service | Forge Studio",
  description: "The terms that apply when you work with Forge Studio.",
  alternates: { canonical: "https://forgestudio.one/terms" },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="November 12, 2026"
      intro="These terms apply to website projects with Forge Studio. Your written proposal sets out the specifics of your project; if it and these terms ever differ, the proposal wins."
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
            "One round of revisions is included in every plan. Changes after that, and anything outside the agreed scope, are quoted separately before we start them.",
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
