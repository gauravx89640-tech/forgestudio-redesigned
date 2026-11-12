import type { Metadata } from "next"
import { LegalPage } from "@/components/forge/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Forge Studio",
  description: "How Forge Studio handles the information you share with us.",
  alternates: { canonical: "https://forgestudio.one/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 12, 2026"
      intro="Forge Studio designs and builds websites for small businesses. This page explains what information we collect through forgestudio.one, why, and what we do with it."
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you contact us through the form on this site or by email, we receive what you choose to send: usually your name, business name, email address and your message.",
            "Like any website, this site is served by a hosting provider (Cloudflare), which processes basic technical information such as your IP address and browser type in order to deliver and protect the site.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your details only to reply to you, prepare a quote or mock-up, and deliver and support your project.",
            "We do not sell, rent or trade your information, and we do not add you to a mailing list.",
          ],
        },
        {
          heading: "Who else sees it",
          body: [
            "Only the services we need to run the business: our email provider, our hosting provider, and — if you become a client — the payment provider you pay through. Each handles data under its own privacy policy.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We keep correspondence for as long as it is useful for your enquiry or project. You can ask us to delete your information at any time by emailing hello@forgestudio.one.",
          ],
        },
        {
          heading: "Changes",
          body: ["If this policy changes, we will update this page and the date at the top."],
        },
      ]}
    />
  )
}
