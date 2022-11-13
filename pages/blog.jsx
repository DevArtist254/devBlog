import blog from "./api/devBlog.json"

// This function gets called at build time
export async function getStaticProps({req, res}) {
 // Call an external API endpoint to get posts
 const posts = blog.posts

 // This value is considered fresh for ten seconds (s-maxage=10).
 // If a request is repeated within the next 10 seconds, the previously
 // cached value will still be fresh. If the request is repeated before 59 seconds,
 // the cached value will be stale but still render (stale-while-revalidate=59).
 //
 // In the background, a revalidation request will be made to populate the cache
 // with a fresh value. If you refresh the page, you will see the new value.
 res.setHeader(
  "Cache-Control",
  "public, s-maxage=10, stale-while-revalidate=59"
 )

 // By returning { props: { posts } }, the Blog component
 // will receive `posts` as a prop at build time
 return {
  props: {
   posts,
  },
 }
}

export default function Blog({posts}) {
 return (
  <ul>
   {posts.map((post) => (
    <ul key={post.id}>
     <li>
      {" "}
      <h1>{post.title}</h1> <p>{post.body}</p> <q>{post.likes}</q>
     </li>
    </ul>
   ))}
  </ul>
 )
}
