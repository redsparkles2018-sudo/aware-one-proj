"use client";

import { useState } from "react";

const services = ["Operate", "Source", "Build", "Not sure yet"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--bg-soft)",
  color: "var(--text)",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 6,
  color: "var(--text)",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Mailto fallback — replace with Resend API route when ready
    const subject = encodeURIComponent(`Aware One enquiry — ${form.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:info@awareone.co.nz?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>
          Your email client should have opened.
        </h3>
        <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.65 }}>
          If it didn&apos;t, email us directly at{" "}
          <a href="mailto:info@awareone.co.nz" style={{ color: "var(--teal)" }}>
            info@awareone.co.nz
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <label htmlFor="name" style={labelStyle}>Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@yourbusiness.co.nz"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="service" style={labelStyle}>What are you interested in?</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Tell us about your business</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's the biggest challenge you're facing right now?"
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary"
        style={{
          width: "100%",
          padding: "14px",
          fontSize: 15,
          border: "none",
          opacity: status === "sending" ? 0.7 : 1,
          cursor: status === "sending" ? "not-allowed" : "pointer",
        }}
      >
        {status === "sending" ? "Sending..." : "Send message →"}
      </button>

      <p style={{ fontSize: 12, color: "var(--text-2)", textAlign: "center" }}>
        Or skip the form —{" "}
        <a href="mailto:info@awareone.co.nz" style={{ color: "var(--teal)" }}>
          email us directly
        </a>
      </p>
    </form>
  );
}
