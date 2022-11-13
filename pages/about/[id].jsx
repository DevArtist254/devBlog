// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
 return {
  paths: [{params: {id: "1"}}, {params: {id: "2"}}],
  fallback: false, // can also be true or 'blocking'
 }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
 // Call an external API endpoint to get posts
 const posts = blog.posts
 return {
  // Passed to the page component as props
  props: {post: {}},
 }
}

export default function Post({post}) {
 // Render post...
}

// pages/posts/[id].js

export async function getStaticPs() {
 // When this is true (in preview environments) don't
 // prerender any static pages
 // (faster builds, but slower initial page load)
 if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  return {
   paths: [],
   fallback: "blocking",
  }
 }

 // Call an external API endpoint to get posts
 const res = await fetch("https://.../posts")
 const posts = await res.json()

 // Get the paths we want to prerender based on posts
 // In production environments, prerender all pages
 // (slower builds, but faster initial page load)
 const paths = posts.map((post) => ({
  params: {id: post.id},
 }))

 // { fallback: false } means other routes should 404
 return {paths, fallback: false}
}
