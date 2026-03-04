import Link from "next/link";
import Image from "next/image";

const services = [
  { href: "/services/operate", label: "Operate" },
  { href: "/services/source", label: "Source" },
  { href: "/services/build", label: "Build" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--foot-bg)",
        borderTop: "1px solid var(--border)",
        padding: "56px 24px 32px",
        color: "var(--text-2)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div>
          <Image
            src="/brand/logo-white.svg"
            alt="Aware One"
            width={110}
            height={30}
            style={{ marginBottom: 16 }}
          />
          <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 280 }}>
            One partner. Every advantage. Helping NZ businesses modernise with
            smarter operations, global sourcing, and custom technology.
          </p>
          <p style={{ fontSize: 13, marginTop: 16 }}>
            <a
              href="mailto:info@awareone.co.nz"
              style={{ color: "var(--teal)" }}
            >
              info@awareone.co.nz
            </a>
          </p>
        </div>

        {/* Services */}
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Services
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {services.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{ fontSize: 14, color: "var(--text-2)", transition: "color 0.2s" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Company
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {company.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{ fontSize: 14, color: "var(--text-2)", transition: "color 0.2s" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>© {new Date().getFullYear()} Aware One. All rights reserved.</span>
        <span>Auckland, New Zealand</span>
      </div>
    </footer>
  );
}
