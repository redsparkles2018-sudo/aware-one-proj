"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
        {/* Dark variant shown by default; JS swaps if needed */}
        <Image
          src="/brand/logo-combined-dark.svg"
          alt="Aware One"
          width={120}
          height={34}
          priority
        />
      </Link>

      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: 28,
        }}
      >
        {[
          { href: "/services", label: "Services" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} className="nav-link">
            {label}
          </Link>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <ThemeToggle />
        <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
          Free call
        </Link>
      </div>

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
        }
      `}</style>
    </nav>
  );
}
