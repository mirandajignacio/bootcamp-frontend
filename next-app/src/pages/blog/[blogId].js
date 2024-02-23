// This function gets called at build time
export async function getStaticPaths() {
  // Call an API or fetch data from a CMS to get the list of blog posts
  const res = await fetch("http://localhost:3000/api/blogs");
  const posts = await res.json();

  // Generate the paths for each blog post
  const paths = posts.map((post) => ({
    params: { blogId: post.toString() },
  }));

  return { paths, fallback: false };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call an API or fetch data from a CMS to get the blog post with the given index
  const res = await fetch(`http://localhost:3000/api/blogs/${params.blogId}`);
  const blog = await res.json();

  return {
    props: {
      ...blog,
    },
  };
}

export default function BlogPost({ blog }) {
  // Render the blog post
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
