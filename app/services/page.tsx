import type { Metadata } from "next";
import Link from "next/link";
import ThemedIcon from "@/components/ThemedIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three pillars — Operate, Source, Build. One partner helping NZ businesses modernise without the enterprise price tag.",
};

const pillars = [
  {
    light: "/brand/icon-operate.svg",
    dark: "/brand/icon-operate-dark.svg",
    name: "Operate",
    tagline: "Systems · Automation · Workflows",
    href: "/services/operate",
    problem: "Your tools don't talk to each other and your team is doing manual work that should be automatic.",
    bullets: [
      "Full tech stack audit — find what's costing you money",
      "Connect your systems so data flows automatically",
      "Build AI automation for your most repetitive workflows",
      "Clear dashboards so you always know where you stand",
      "Reduce operational costs without cutting your team",
    ],
  },
  {
    light: "/brand/icon-source.svg",
    dark: "/brand/icon-source-dark.svg",
    name: "Source",
    tagline: "Procurement · Logistics · Quality",
    href: "/services/source",
    problem: "You can't verify overseas suppliers from 10,000km away — and one bad shipment can wipe out months of profit.",
    bullets: [
      "Research and shortlist verified suppliers across Asia",
      "Negotiate MOQs and pricing on your behalf",
      "Run quality control and factory checks before shipment",
      "Manage freight, customs clearance and NZ compliance",
      "Bridge the language gap — we speak Mandarin",
    ],
  },
  {
    light: "/brand/icon-build.svg",
    dark: "/brand/icon-build-dark.svg",
    name: "Build",
    tagline: "Software · AI Agents · Marketing",
    href: "/services/build",
    problem: "Agencies charge $30–80k and take 6 months. Off-the-shelf tools sort-of work but never quite fit.",
    bullets: [
      "AI agents for customer service, lead qualification and ops",
      "Custom business apps — CRMs, portals, booking systems",
      "SEO-optimised websites that rank and convert",
      "Branding, marketing campaigns and content systems",
      "API & cloud integrations that grow with you",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          padding: "72px 24px 56px",
          maxWidth: 1120,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div className="section-tag">Our services</div>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            marginBottom: 16,
          }}
        >
          Three pillars. One partner.
        </h1>
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.75,
            color: "var(--text-2)",
            maxWidth: 560,
            margin: "0 auto 0",
          }}
        >
          Everything your business needs to modernise — operations, sourcing, and
          technology — without building a large team or paying enterprise prices.
        </p>
      </section>

      {/* Pillar cards */}
      <section style={{ padding: "0 24px 88px", maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {pillars.map((p, i) => (
            <div
              key={p.name}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 18,
                padding: "36px",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: 40,
                alignItems: "start",
              }}
              className="pillar-row"
            >
              <div>
                <ThemedIcon
                  lightSrc={p.light}
                  darkSrc={p.dark}
                  alt={p.name}
                  width={52}
                  height={52}
                  style={{ marginBottom: 16, display: "block" }}
                />
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    marginBottom: 6,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--teal)",
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  {p.tagline}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-2)", marginBottom: 20 }}>
                  {p.problem}
                </p>
                <Link href={p.href} className="btn-primary" style={{ fontSize: 14 }}>
                  Learn more →
                </Link>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  paddingTop: 8,
                }}
              >
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14.5,
                      color: "var(--text-2)",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--teal)",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--cta-bg)",
          padding: "72px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 14,
          }}
        >
          Not sure where to start?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
          Book a free 30-minute call and we&apos;ll tell you exactly which pillar will make the biggest difference.
        </p>
        <Link href="/contact" className="btn-primary" style={{ padding: "14px 32px", fontSize: 15 }}>
          Book a free call
        </Link>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .pillar-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
