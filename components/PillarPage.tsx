import Link from "next/link";
import ThemedIcon from "./ThemedIcon";

interface PillarPageProps {
  name: string;
  tagline: string;
  lightIcon: string;
  darkIcon: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: string[];
  whatWeDo: string[];
  cta?: string;
}

export default function PillarPage({
  name,
  tagline,
  lightIcon,
  darkIcon,
  heroHeadline,
  heroSub,
  painPoints,
  whatWeDo,
  cta = "Book a free call",
}: PillarPageProps) {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 72px",
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 52,
          alignItems: "center",
        }}
        className="pillar-hero"
      >
        <div>
          <div className="section-tag">{tagline}</div>
          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: "-0.03em",
              marginBottom: 20,
            }}
            dangerouslySetInnerHTML={{ __html: heroHeadline }}
          />
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.75,
              color: "var(--text-2)",
              marginBottom: 32,
            }}
          >
            {heroSub}
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "13px 26px", fontSize: 15 }}>
              {cta}
            </Link>
            <Link href="/services" className="btn-ghost" style={{ padding: "13px 26px", fontSize: 15 }}>
              All services
            </Link>
          </div>
        </div>

        <div
          style={{
            background: "var(--bg-soft)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedIcon
            lightSrc={lightIcon}
            darkSrc={darkIcon}
            alt={name}
            width={120}
            height={120}
          />
        </div>
      </section>

      {/* Pain points */}
      <section
        style={{
          background: "var(--cta-bg)",
          padding: "72px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: 16,
            }}
          >
            Sound familiar?
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: 32,
              lineHeight: 1.15,
            }}
          >
            The problems we solve
          </h2>
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
            className="pain-grid"
          >
            {painPoints.map((p) => (
              <li
                key={p}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.55,
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "var(--teal)", flexShrink: 0 }}>✗</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section style={{ padding: "72px 24px", maxWidth: 1120, margin: "0 auto" }}>
        <div className="section-tag">What we do</div>
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 32,
            lineHeight: 1.15,
          }}
        >
          How we help
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
          className="what-grid"
        >
          {whatWeDo.map((item) => (
            <div
              key={item}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "20px 22px",
                fontSize: 14.5,
                color: "var(--text-2)",
                lineHeight: 1.55,
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>✓</span>
              {item}
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
          Ready to fix {name.toLowerCase()}?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 16,
            maxWidth: 400,
            margin: "0 auto 32px",
            lineHeight: 1.65,
          }}
        >
          Book a free 30-minute strategy call. No obligation — just clarity on
          what&apos;s possible.
        </p>
        <Link href="/contact" className="btn-primary" style={{ padding: "14px 32px", fontSize: 15 }}>
          Book a free call
        </Link>
      </section>

      <style>{`
        @media (max-width: 800px) {
          .pillar-hero {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 52px 20px 48px !important;
          }
        }
        @media (max-width: 640px) {
          .pain-grid, .what-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
