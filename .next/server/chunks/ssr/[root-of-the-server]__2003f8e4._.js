module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70864,a=>{a.n(a.i(33290))},43619,a=>{a.n(a.i(79962))},13718,a=>{a.n(a.i(85523))},18198,a=>{a.n(a.i(45518))},62212,a=>{a.n(a.i(66114))},57944,a=>{"use strict";let b=`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "categories": categories[]->{title},
    "excerpt": array::join(string::split((pt::text(body)), "")[0..160], "") + "..."
  }
`,c=`
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
`,d=`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;a.s(["postBySlugQuery",0,c,"postSlugsQuery",0,d,"postsQuery",0,b],57944)},52289,a=>{"use strict";var b=a.i(7997),c=a.i(95936),d=a.i(56342),e=a.i(57944);let f={Operate:"#00A99D",Source:"#0080A0",Build:"#6B5EA8"};async function g(){let{data:a}=await (0,d.sanityFetch)({query:e.postsQuery});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("section",{style:{padding:"72px 24px 56px",maxWidth:1120,margin:"0 auto"},children:[(0,b.jsx)("div",{className:"section-tag",children:"Blog"}),(0,b.jsx)("h1",{style:{fontSize:"clamp(32px, 5vw, 48px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.08,marginBottom:12},children:"Practical guides for NZ businesses."}),(0,b.jsx)("p",{style:{fontSize:16,color:"var(--text-2)",lineHeight:1.75},children:"No fluff. Just useful content on AI tools, sourcing and building for growth."})]}),(0,b.jsx)("section",{style:{padding:"0 24px 88px",maxWidth:1120,margin:"0 auto"},children:0===a.length?(0,b.jsx)("p",{style:{color:"var(--text-2)",fontSize:15},children:"Posts coming soon — check back shortly."}):(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20},className:"blog-grid",children:a.map(a=>{let d=a.categories?.[0]?.title??"General";return(0,b.jsx)(c.default,{href:`/blog/${a.slug}`,style:{textDecoration:"none"},children:(0,b.jsxs)("article",{style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:"24px 22px",height:"100%",display:"flex",flexDirection:"column",gap:12,transition:"all 0.25s"},className:"blog-card",children:[(0,b.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[(0,b.jsx)("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:f[d]??"var(--teal)",background:"var(--teal-p)",padding:"3px 10px",borderRadius:99},children:d}),(0,b.jsx)("span",{style:{fontSize:12,color:"var(--text-2)"},children:a.publishedAt?new Date(a.publishedAt).toLocaleDateString("en-NZ",{year:"numeric",month:"long",day:"numeric"}):"Draft"})]}),(0,b.jsx)("h2",{style:{fontSize:17,fontWeight:700,lineHeight:1.35,letterSpacing:"-0.01em"},children:a.title}),a.excerpt&&(0,b.jsx)("p",{style:{fontSize:13.5,lineHeight:1.65,color:"var(--text-2)",flex:1},children:a.excerpt}),(0,b.jsx)("span",{style:{fontSize:13,fontWeight:700,color:"var(--teal)"},children:"Read more →"})]})},a._id)})})}),(0,b.jsx)("style",{children:`
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
      `})]})}a.s(["default",()=>g,"metadata",0,{title:"Blog",description:"Practical guides for NZ small businesses — AI tools, overseas sourcing, custom software and business operations."}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2003f8e4._.js.map