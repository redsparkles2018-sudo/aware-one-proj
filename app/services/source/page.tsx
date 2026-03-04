import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";

export const metadata: Metadata = {
  title: "Source — Overseas Supplier & Supply Chain Setup",
  description:
    "Can't verify suppliers from 10,000km away? We find, vet and manage your overseas supply chain — from China and Asia — so you never get burned by a bad shipment.",
};

export default function SourcePage() {
  return (
    <PillarPage
      name="Source"
      tagline="Procurement · Logistics · Quality"
      lightIcon="/brand/icon-source.svg"
      darkIcon="/brand/icon-source-dark.svg"
      heroHeadline={`Overseas sourcing, <em style="color:var(--teal);font-style:normal;">done right.</em>`}
      heroSub="Finding reliable suppliers overseas is hard enough without language barriers, time zones and 10,000km between you. We handle the entire sourcing process — from identifying verified suppliers to getting product safely to your door."
      painPoints={[
        "Can't verify if a supplier is legitimate from 10,000km away",
        "Minimum order quantities too high for a small business",
        "Quality issues you only discover after the shipment arrives",
        "Hidden costs in freight, customs and compliance",
        "Language and time zone barriers slow everything down",
        "One bad supplier can wipe out months of profit",
      ]}
      whatWeDo={[
        "Research and shortlist verified suppliers across Asia",
        "Negotiate MOQs and pricing on your behalf",
        "Run quality control and factory checks before shipment",
        "Manage freight, customs clearance and NZ compliance",
        "Bridge the language gap — we speak Mandarin",
        "Ongoing supplier management so you're never stuck",
      ]}
    />
  );
}
