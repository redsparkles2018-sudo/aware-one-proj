import type { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { postsQuery } from "@/sanity/lib/queries";

type Post = {
  _id: string;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  excerpt: string | null;
  categories: Array<{ title: string }> | null;
};

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides for NZ small businesses — AI tools, overseas sourcing, custom software and business operations.",
};

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

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: postsQuery });

  return (
    <>
      <section
        style={{
          padding: "72px 24px 56px",
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        <div className="section-tag">Blog</div>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            marginBottom: 12,
          }}
        >
          Practical guides for NZ businesses.
        </h1>
        <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.75 }}>
          No fluff. Just useful content on AI tools, sourcing and building for
          growth.
        </p>
      </section>

      <section
        style={{
          padding: "0 24px 88px",
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        {posts.length === 0 ? (
          <p style={{ color: "var(--text-2)", fontSize: 15 }}>
            Posts coming soon — check back shortly.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="blog-grid"
          >
            {(posts as Post[]).map((post) => {
              const category = post.categories?.[0]?.title ?? "General";
              return (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: "24px 22px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      transition: "all 0.25s",
                    }}
                    className="blog-card"
                  >
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
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
                      <span style={{ fontSize: 12, color: "var(--text-2)" }}>
                        {post.publishedAt ? formatDate(post.publishedAt) : "Draft"}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        lineHeight: 1.35,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p
                        style={{
                          fontSize: 13.5,
                          lineHeight: 1.65,
                          color: "var(--text-2)",
                          flex: 1,
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--teal)" }}>
                      Read more →
                    </span>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <style>{`
        .blog-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
          border-color: var(--teal);
        }
        @media (max-width: 860px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
