import { notFound, redirect } from "next/navigation";

const API_URL = "http://localhost:4000/posts";

export default async function PostPage({ params }) {
  const { source, pid, slug } = params;
  console.log(source,pid,slug);

  const res = await fetch(
    `${API_URL}/${source}/${pid}/${slug}`,
    { cache: "no-store" }
  );

  // Backend 301 redirect handling
  if (res.status === 301 || res.status === 302) {
    const location = res.headers.get("location");
    if (location) redirect(location);
  }

  if (!res.ok) {
    notFound();
  }

  const post = await res.json();

  return (
    <article style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>{post.title}</h1>

      <p>
        <strong>Source:</strong> {post.source.name}
      </p>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          style={{ width: "100%", margin: "20px 0" }}
        />
      )}

      <p>{post.excerpt}</p>

      <p>
        <a href={post.originalUrl} target="_blank">
          Read original article
        </a>
      </p>

      <small>
        Published: {new Date(post.publishedAt).toLocaleString()}
      </small>
    </article>
  );
}
