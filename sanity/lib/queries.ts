import { defineQuery } from "next-sanity";

export const postsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "categories": categories[]->{title},
    "excerpt": array::join(string::split((pt::text(body)), "")[0..160], "") + "..."
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    body,
    mainImage,
    "author": author->{name},
    "categories": categories[]->{title}
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`);
