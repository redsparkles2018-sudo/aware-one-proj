import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const data = await client.fetch(postSlugsQuery);
  return data.map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: postBySlugQuery,
    params: { slug },
  });
  if (!post) return {};
  return {
    title: post.title ?? undefined,
    openGraph: { title: post.title ?? undefined, type: "article" },
  };
}

const categoryColour: Record<string, string> = {
  Operate: "#00A99D",
  Source: "#0080A0",
  Build: "#6B5EA8",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-NZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: postBySlugQuery,
    params: { slug },
  });

  if (!post) notFound();

  const category = post.categories?.[0]?.title ?? "General";

  return (
    <>
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
        {/* Back link */}
        <Link
          href="/blog"
          style={{
            fontSize: 13,
            color: "var(--text-2)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 32,
          }}
        >
          ← Back to Blog
        </Link>

        {/* Meta */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: categoryColour[category] ?? "var(--teal)",
              background: "var(--teal-p)",
              padding: "3px 10px",
              borderRadius: 99,
            }}
          >
            {category}
          </span>
          {post.publishedAt && (
            <span style={{ fontSize: 13, color: "var(--text-2)" }}>
              {formatDate(post.publishedAt)}
            </span>
          )}
          {post.author?.name && (
            <span style={{ fontSize: 13, color: "var(--text-2)" }}>
              · {post.author.name}
            </span>
          )}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 40,
          }}
        >
          {post.title}
        </h1>

        {/* Body */}
        {post.body && (
          <div className="prose">
            <PortableText value={post.body} />
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            marginTop: 64,
            padding: "32px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
            Want help putting this into practice?
          </p>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 20 }}>
            Book a free 30-minute strategy call — no commitment, no sales pitch.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a free call →
          </Link>
        </div>
      </article>

      <style>{`
        .prose {
          font-size: 16px;
          line-height: 1.85;
          color: var(--text);
        }
        .prose h2 {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 2.5rem 0 1rem;
          color: var(--text);
        }
        .prose h3 {
          font-size: 19px;
          font-weight: 600;
          margin: 2rem 0 0.75rem;
          color: var(--text);
        }
        .prose p { margin-bottom: 1.4rem; }
        .prose ul, .prose ol {
          padding-left: 1.5rem;
          margin-bottom: 1.4rem;
        }
        .prose li { margin-bottom: 0.4rem; }
        .prose strong { font-weight: 700; color: var(--text); }
        .prose a { color: var(--teal); text-underline-offset: 3px; }
        .prose a:hover { color: var(--teal-l); }
        .prose blockquote {
          border-left: 3px solid var(--teal);
          padding-left: 1.25rem;
          color: var(--text-2);
          font-style: italic;
          margin: 1.5rem 0;
        }
        .prose code {
          font-size: 13px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 2px 6px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
