import blog from "./api/devBlog.json"

// This function gets called at build time
export async function getStaticProps() {
 // Call an external API endpoint to get posts
 const res = blog
 const posts = res.posts

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
