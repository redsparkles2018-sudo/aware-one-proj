import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";

export const metadata: Metadata = {
  title: "Build — Custom Software, AI Agents & Marketing",
  description:
    "Custom apps, AI agents and SEO-optimised websites for NZ SMBs — without the $80k agency bill or 6-month wait.",
};

export default function BuildPage() {
  return (
    <PillarPage
      name="Build"
      tagline="Software · AI Agents · Marketing"
      lightIcon="/brand/icon-build.svg"
      darkIcon="/brand/icon-build-dark.svg"
      heroHeadline={`Software that fits. <em style="color:var(--teal);font-style:normal;">Not sort-of fits.</em>`}
      heroSub="Off-the-shelf tools almost work — but almost isn't good enough when it's your business on the line. We build exactly what you need: custom apps, AI-powered workflows and websites that actually show up on Google."
      painPoints={[
        "Agencies charge $30–80k and take 6 months to deliver",
        "Off-the-shelf tools sort-of work but never quite fit",
        "You'd need a dev, a marketer, an SEO specialist and a designer",
        "AI tools exist but nobody has time to set them up properly",
        "Your website is slow, outdated and invisible on Google",
      ]}
      whatWeDo={[
        "AI agents — customer service, lead qualification, internal ops",
        "Custom workflows using MCP, APIs and cloud integrations",
        "Business apps — CRMs, portals, inventory, booking systems",
        "SEO-optimised websites that rank and convert",
        "Branding, marketing campaigns and content systems",
        "Everything an SMB needs to scale — without a full team",
      ]}
    />
  );
}
