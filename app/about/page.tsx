import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aware One is a NZ-based B2B consultancy founded by Wei Yu. One partner — operations, sourcing, and technology — for NZ businesses ready to modernise.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 64px",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <div className="section-tag">About Aware One</div>
        <h1
          style={{
            fontSize: "clamp(34px, 5.5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.07,
            letterSpacing: "-0.03em",
            marginBottom: 20,
          }}
        >
          Built for the business owners
          <br />
          <em style={{ color: "var(--teal)", fontStyle: "normal" }}>
            doing it themselves.
          </em>
        </h1>
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.75,
            color: "var(--text-2)",
          }}
        >
          Aware One exists because most NZ small businesses can&apos;t afford a
          full operations team, an offshore sourcing manager, and a development
          agency — but they need all three to compete.
        </p>
      </section>

      {/* Story */}
      <section
        style={{
          background: "var(--bg-soft)",
          padding: "64px 24px",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
          className="about-grid"
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Who we are
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 14,
              }}
            >
              Aware One is led by Wei Yu, based in Auckland, New Zealand. With a
              background spanning business operations, technology, and Asia supply
              chains, Wei built Aware One to give NZ SMBs access to the kind of
              end-to-end capability that was previously only available to large
              businesses.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--text-2)",
              }}
            >
              {/* Placeholder — Wei Yu's full bio to be added */}
              More about Wei&apos;s background coming soon.
            </p>
          </div>
          <div>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Why &quot;Aware One&quot;?
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 14,
              }}
            >
              The name reflects two things: the awareness to see your whole
              business clearly — operations, supply chain, technology, marketing
              — and the idea of one partner who can handle it all.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--text-2)",
              }}
            >
              Our tagline says it plainly: <em>One partner. Every advantage.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "64px 24px", maxWidth: 800, margin: "0 auto" }}>
        <div className="section-tag">How we work</div>
        <h2
          style={{
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 32,
            lineHeight: 1.2,
          }}
        >
          NZ-based. Globally connected.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="values-grid"
        >
          {[
            { icon: "🇳🇿", title: "Auckland based", body: "We work in your time zone, in your market, and we understand NZ business." },
            { icon: "🌏", title: "Asia supply network", body: "Active supplier networks in China, Vietnam and Taiwan. We speak Mandarin." },
            { icon: "🤖", title: "AI-first capability", body: "We use the latest AI tools — the same ones large businesses pay agencies $100k+ to implement." },
          ].map((v) => (
            <div
              key={v.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "24px 20px",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{v.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--text-2)" }}>{v.body}</p>
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
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 14,
          }}
        >
          Let&apos;s talk about your business.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, maxWidth: 380, margin: "0 auto 32px", lineHeight: 1.65 }}>
          Free 30-minute strategy call. No sales pitch — just an honest
          conversation about where you can improve.
        </p>
        <Link href="/contact" className="btn-primary" style={{ padding: "14px 32px", fontSize: 15 }}>
          Book a free call
        </Link>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .about-grid, .values-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </>
  );
}
