import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ThemedIcon from "@/components/ThemedIcon";
import {
  IconMapPin,
  IconGlobe,
  IconCpu,
  IconZap,
  IconPackage,
  IconSettings,
  IconCode,
  IconMegaphone,
  IconTrendingUp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Aware One — One partner. Every advantage.",
  description:
    "B2B consultancy helping NZ SMBs modernise — smarter operations, global supply chains, and custom technology — without the enterprise price tag.",
};

const statCards = [
  {
    light: "/brand/icon-operate.svg",
    dark: "/brand/icon-operate-dark.svg",
    label: "Operate — Systems & Automation",
    value: "Cut overhead,",
    highlight: "not headcount",
  },
  {
    light: "/brand/icon-source.svg",
    dark: "/brand/icon-source-dark.svg",
    label: "Source — Global Supply Chain",
    value: "Asia suppliers",
    highlight: "you can trust",
  },
  {
    light: "/brand/icon-build.svg",
    dark: "/brand/icon-build-dark.svg",
    label: "Build — Software & Marketing",
    value: "Scale",
    highlight: "without the team",
  },
];

const trustItems = [
  { icon: IconMapPin, text: "New Zealand based", sub: "Auckland, NZ" },
  { icon: IconGlobe, text: "Asia supply chain network", sub: "China, Vietnam, Taiwan" },
  { icon: IconCpu, text: "AI-first approach", sub: "Real automation, real results" },
  { icon: IconZap, text: "Fast to implement", sub: "Results in weeks, not months" },
];

const flowSteps = [
  { icon: IconPackage, name: "Source", desc: "Products & supply", highlight: false },
  { icon: IconSettings, name: "Operate", desc: "Systems & automation", highlight: false },
  { icon: IconCode, name: "Build", desc: "Software & tools", highlight: false },
  { icon: IconMegaphone, name: "Market", desc: "Campaigns & SEO", highlight: false },
  { icon: IconTrendingUp, name: "Growth", desc: "You, in command", highlight: true },
];

const services = [
  {
    light: "/brand/icon-operate.svg",
    dark: "/brand/icon-operate-dark.svg",
    name: "Operate",
    tagline: "Systems · Automation · Workflows",
    href: "/services/operate",
    bullets: [
      "Audit your tech stack and eliminate waste",
      "Connect your tools so data flows automatically",
      "Build AI automation for repetitive tasks",
      "One dashboard — full visibility across your business",
      "Scale up without adding headcount",
    ],
  },
  {
    light: "/brand/icon-source.svg",
    dark: "/brand/icon-source-dark.svg",
    name: "Source",
    tagline: "Procurement · Logistics · Quality",
    href: "/services/source",
    bullets: [
      "Verified supplier research across China & Asia",
      "Price and MOQ negotiation on your behalf",
      "Factory quality checks before anything ships",
      "Freight, customs and NZ compliance handled",
      "Mandarin-speaking — no language barriers",
    ],
  },
  {
    light: "/brand/icon-build.svg",
    dark: "/brand/icon-build-dark.svg",
    name: "Build",
    tagline: "Software · AI Agents · Marketing",
    href: "/services/build",
    bullets: [
      "Custom apps, CRMs and business tools",
      "AI agents for sales, support and operations",
      "SEO-optimised websites that rank and convert",
      "Marketing campaigns, branding and content",
      "API & cloud integrations that grow with you",
    ],
  },
];

const whyPoints = [
  {
    num: 1,
    title: "Your time is the most valuable thing you have",
    body: "Every hour spent on operations, logistics, or broken software is an hour not spent on customers, strategy and growth. We take the operations so you can focus on what only you can do.",
  },
  {
    num: 2,
    title: "End-to-end, not piecemeal",
    body: "We don't hand you a report and walk away. We diagnose, build, implement and stay — covering everything from sourcing to software to marketing under one roof.",
  },
  {
    num: 3,
    title: "NZ-based, globally connected",
    body: "Based in Auckland with active supplier networks in China, Vietnam and Taiwan — and world-class software and AI capability ready to deploy.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section>
        <div
          style={{
            padding: "80px 24px 72px",
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 52,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--teal-p)",
                border: "1px solid rgba(0,169,157,0.25)",
                borderRadius: 99,
                padding: "5px 14px",
                fontSize: 11,
                fontWeight: 700,
                color: "var(--teal)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--teal)",
                  display: "inline-block",
                }}
              />
              NZ Business Consultancy
            </div>

            <h1
              style={{
                fontSize: "clamp(34px, 5.5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.07,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Focus on your ideas.
              <br />
              <em style={{ color: "var(--teal)", fontStyle: "normal" }}>
                We run the rest.
              </em>
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 2vw, 17px)",
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 32,
              }}
            >
              Your creativity and vision are too valuable to waste on operations,
              logistics and admin. Aware One takes care of the entire engine —
              from sourcing to sales — so you can stay in command of the big
              picture.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ padding: "13px 26px", fontSize: 15 }}
              >
                Book a free call
              </Link>
              <Link
                href="/services"
                className="btn-ghost"
                style={{ padding: "13px 26px", fontSize: 15 }}
              >
                See our services
              </Link>
            </div>

            <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 14 }}>
              Free 30-min strategy session.{" "}
              <strong style={{ color: "var(--teal)", fontWeight: 600 }}>
                No obligation.
              </strong>
            </p>
          </div>

          {/* Hero Visual */}
          <div
            style={{
              background: "var(--bg-soft)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, var(--teal), var(--teal-l))",
              }}
            />
            {statCards.map((card) => (
              <div
                key={card.label}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <ThemedIcon
                    lightSrc={card.light}
                    darkSrc={card.dark}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-2)",
                      fontWeight: 500,
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      marginTop: 2,
                    }}
                  >
                    {card.value}{" "}
                    <span style={{ color: "var(--teal)" }}>{card.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-soft)",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px 36px",
          flexWrap: "wrap",
        }}
      >
        {trustItems.map((item) => (
          <div
            key={item.text}
            style={{ display: "flex", alignItems: "center", gap: 9 }}
          >
            <span style={{ color: "var(--teal)", flexShrink: 0, display: "flex" }}>
              <item.icon size={18} />
            </span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{item.text}</div>
              <div style={{ fontSize: 11, color: "var(--text-2)" }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MISSION CONTROL */}
      <section
        style={{
          padding: "88px 24px",
          background: "var(--cta-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(0,169,157,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(0,196,183,0.05)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: 16,
            }}
          >
            The big picture
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "white",
              marginBottom: 20,
            }}
          >
            {`You're the commander.`}
            <br />
            {`We're your `}
            <em style={{ color: "var(--teal-l)", fontStyle: "normal" }}>
              Mission Control.
            </em>
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 640,
              margin: "0 auto 48px",
            }}
          >
            The best business owners spend their time on vision, decisions and
            relationships — not fixing broken systems or chasing suppliers. We
            rebuild your operation end to end, so everything just works.
          </p>

          {/* Flow diagram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 48,
            }}
            className="flow-diagram"
          >
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.name}>
                <div
                  style={{
                    background: step.highlight
                      ? "rgba(0,169,157,0.12)"
                      : "rgba(255,255,255,0.05)",
                    border: `1px solid ${step.highlight ? "rgba(0,169,157,0.4)" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: 14,
                    padding: "20px 22px",
                    textAlign: "center",
                    minWidth: 140,
                  }}
                >
                  <div
                    style={{
                      marginBottom: 10,
                      display: "flex",
                      justifyContent: "center",
                      color: step.highlight ? "var(--teal-l)" : "rgba(255,255,255,0.75)",
                    }}
                  >
                    <step.icon size={24} />
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: step.highlight ? "var(--teal-l)" : "white",
                    }}
                  >
                    {step.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 3,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <span
                    key={`arrow-${i}`}
                    className="flow-arrow"
                    style={{
                      color: "var(--teal)",
                      fontSize: 18,
                      fontWeight: 700,
                      padding: "0 10px",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div
            style={{
              borderLeft: "3px solid var(--teal)",
              padding: "18px 24px",
              background: "rgba(0,169,157,0.08)",
              borderRadius: "0 12px 12px 0",
              textAlign: "left",
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
                fontStyle: "italic",
              }}
            >
              {`"Imagine one partner that handles your supply chain, connects all your systems, builds your software, runs your marketing — and hands you a clear view of everything. You make the calls. `}
              <strong style={{ color: "var(--teal-l)", fontStyle: "normal" }}>
                We make sure the engine never stops.
              </strong>
              {`"`}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div
          style={{
            padding: "88px 24px",
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          <div className="section-tag">Our services</div>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 10,
            }}
          >
            Three pillars. One partner.
          </h2>
          <p
            style={{
              fontSize: "clamp(13px, 1.8vw, 15px)",
              lineHeight: 1.75,
              color: "var(--text-2)",
              maxWidth: 520,
              marginBottom: 44,
            }}
          >
            Every service is designed to take something off your plate and give
            you back time for what matters.
          </p>

          <div className="services-grid">
            {services.map((svc) => (
              <div key={svc.name} className="service-card">
                <ThemedIcon
                  lightSrc={svc.light}
                  darkSrc={svc.dark}
                  alt={svc.name}
                  width={52}
                  height={52}
                  style={{ marginBottom: 18, display: "block" }}
                />
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    marginBottom: 6,
                  }}
                >
                  {svc.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--teal)",
                    fontWeight: 600,
                    marginBottom: 16,
                    letterSpacing: "0.02em",
                  }}
                >
                  {svc.tagline}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    flex: 1,
                  }}
                >
                  {svc.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 9,
                        fontSize: 13.5,
                        color: "var(--text-2)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--teal)",
                          fontSize: 12,
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        →
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--teal)",
                    marginTop: 22,
                  }}
                  className="service-link"
                >
                  Learn more <span className="service-link-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AWARE ONE */}
      <section
        style={{
          background: "var(--bg-soft)",
          padding: "88px 24px",
        }}
      >
        <div className="why-inner">
          <div>
            <div className="section-tag">Why Aware One</div>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: 18,
              }}
            >
              The only partner
              <br />
              your business needs for{" "}
              <em style={{ color: "var(--teal)", fontStyle: "normal" }}>
                what&apos;s next.
              </em>
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 14,
              }}
            >
              The next generation of successful NZ businesses won&apos;t be built
              by large teams or big budgets. They&apos;ll be built by smart
              operators who know how to leverage the right partners, tools and
              systems.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-2)" }}>
              Aware One is built for exactly that. One relationship. End-to-end
              capability. You stay focused on growth.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {whyPoints.map((pt) => (
              <div
                key={pt.num}
                style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    flexShrink: 0,
                    marginTop: 2,
                    background: "var(--teal)",
                    color: "white",
                    fontSize: 13,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {pt.num}
                </div>
                <div>
                  <h4
                    style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}
                  >
                    {pt.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-2)",
                      lineHeight: 1.65,
                    }}
                  >
                    {pt.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          background: "var(--cta-bg)",
          padding: "88px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "white",
            marginBottom: 14,
            lineHeight: 1.1,
          }}
        >
          Ready to take
          <br />
          <em style={{ color: "var(--teal-l)", fontStyle: "normal" }}>
            command?
          </em>
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "rgba(255,255,255,0.45)",
            marginBottom: 36,
            maxWidth: 420,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Book a free 30-minute strategy call. We&apos;ll identify exactly where
          your biggest opportunities are — and what to do about them.
        </p>
        <Link
          href="/contact"
          className="btn-primary"
          style={{ padding: "15px 34px", fontSize: 15 }}
        >
          Book a free call
        </Link>
        <div
          style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 16 }}
        >
          Or email:{" "}
          <a
            href="mailto:info@awareone.co.nz"
            style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline" }}
          >
            info@awareone.co.nz
          </a>
        </div>
      </section>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 800px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 52px 20px 48px !important;
          }
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 540px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        .service-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--teal);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .service-card:hover {
          box-shadow: var(--shadow);
          transform: translateY(-3px);
        }
        .service-card:hover::after {
          transform: scaleX(1);
        }
        .service-link-arrow {
          transition: transform 0.2s;
          display: inline-block;
        }
        .service-link:hover .service-link-arrow {
          transform: translateX(3px);
        }
        .why-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 800px) {
          .why-inner {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .flow-arrow { display: none; }
          .flow-diagram { gap: 10px; }
        }
      `}</style>
    </>
  );
}
