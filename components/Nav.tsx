"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import ThemedIcon from "./ThemedIcon";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "var(--nav-bg)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border)",
          padding: "0 24px",
          height: scrolled ? 64 : 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          transition: "height 0.35s ease",
        }}
      >
        <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
          <ThemedIcon
            lightSrc="/brand/logo-combined.svg"
            darkSrc="/brand/logo-combined-dark.svg"
            alt="Aware One"
            width={220}
            height={47}
            priority
            style={{
              width: scrolled ? 175 : 220,
              height: scrolled ? 37 : 47,
              transition: "width 0.35s ease, height 0.35s ease",
            }}
          />
        </Link>

        {/* Desktop nav links */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: 28,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="desktop-only">
            <ThemeToggle />
          </div>
          <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
            Free call
          </Link>
          
          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span style={{
              width: 18,
              height: 2,
              background: "var(--text)",
              borderRadius: 1,
              transition: "transform 0.2s",
              transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
            }} />
            <span style={{
              width: 18,
              height: 2,
              background: "var(--text)",
              borderRadius: 1,
              transition: "opacity 0.2s",
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              width: 18,
              height: 2,
              background: "var(--text)",
              borderRadius: 1,
              transition: "transform 0.2s",
              transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: scrolled ? 64 : 76,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg)",
            zIndex: 99,
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 18,
                fontWeight: 600,
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ marginTop: "auto", paddingTop: 24 }}>
            <ThemeToggle />
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-2);
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--text); }
        
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
