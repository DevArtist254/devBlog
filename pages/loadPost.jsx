// pages/blog.js
export async function loadPosts() {
 // Call an external API endpoint to get posts
 const res = await fetch("https://jsonplaceholder.typicode.com/posts")
 const data = await res.json()

 return data
}

// This function runs only on the server side
export async function getStaticProps() {
 // Instead of fetching your `/api` route you can call the same
 // function directly in `getStaticProps`
 const posts = await loadPosts()

 console.log(posts)
 // Props returned will be passed to the page component
 return {props: {posts}}
}

export default function loadPost({posts}) {
 return (
  <ul>
   {posts.map((post) => (
    <ul key={post.id}>
     <li>
      {" "}
      <h1>{post.title}</h1>
      <p>{post.body}</p>
     </li>
    </ul>
   ))}
  </ul>
 )
}
