import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Book a Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with Aware One. We'll identify your biggest opportunities across operations, sourcing and technology.",
};

export default function ContactPage() {
  return (
    <>
      <section
        style={{
          padding: "80px 24px 88px",
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <div className="section-tag">Get in touch</div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: "-0.03em",
              marginBottom: 20,
            }}
          >
            Let&apos;s talk about
            <br />
            <em style={{ color: "var(--teal)", fontStyle: "normal" }}>
              your business.
            </em>
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--text-2)",
              marginBottom: 32,
            }}
          >
            Start with a free 30-minute strategy call. We&apos;ll listen to
            where you are, identify the biggest opportunities, and give you an
            honest picture of what&apos;s possible. No sales pitch.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: "📧", label: "Email", value: "info@awareone.co.nz", href: "mailto:info@awareone.co.nz" },
              { icon: "🇳🇿", label: "Location", value: "Auckland, New Zealand", href: null },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-2)", marginBottom: 4 }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: 15, fontWeight: 600, color: "var(--teal)" }}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 15, fontWeight: 600 }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            padding: 36,
          }}
        >
          <ContactForm />
        </div>
      </section>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 52px 20px 64px !important;
          }
        }
      `}</style>
    </>
  );
}
