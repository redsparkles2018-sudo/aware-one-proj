import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";

export const metadata: Metadata = {
  title: "Operate — AI Tools & Business Automation",
  description:
    "Stop copying data between systems by hand. We audit your tech stack, connect your tools and automate your most repetitive workflows so your team can focus on what matters.",
};

export default function OperatePage() {
  return (
    <PillarPage
      name="Operate"
      tagline="Systems · Automation · Workflows"
      lightIcon="/brand/icon-operate.svg"
      darkIcon="/brand/icon-operate-dark.svg"
      heroHeadline={`Run smarter. <em style="color:var(--teal);font-style:normal;">Not harder.</em>`}
      heroSub="If your team spends time copying data between tools, chasing approvals or running reports manually — that's money walking out the door. We connect your systems and automate the repetitive work so your operation runs itself."
      painPoints={[
        "8+ disconnected tools that don't talk to each other",
        "Staff copying data between systems by hand, every day",
        "Paying for software half your team doesn't use",
        "Every small change needs a developer or consultant",
        "Scaling means hiring more people, not working smarter",
        "No visibility — you're running blind without real data",
      ]}
      whatWeDo={[
        "Full tech stack audit — find what's costing you money",
        "Connect your systems so data flows automatically",
        "Build AI automation for your most repetitive workflows",
        "Create clear dashboards so you always know where you stand",
        "Document processes so anyone can follow them",
        "Reduce operational costs without cutting your team",
      ]}
    />
  );
}
