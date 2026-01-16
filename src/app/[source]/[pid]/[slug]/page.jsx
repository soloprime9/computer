import { notFound, redirect } from "next/navigation";
import PostPage from "@/Components/PostPage";
import PostLayoutClient from "@/components/PostLayoutClient";
export const dynamic = "force-dynamic";

const API_URL = "https://applenews.onrender.com/posts";

export default async function Page({ params }) {
  if (!params) notFound();

  const { source, pid, slug } = params;

  if (!source || !pid || !slug) notFound();

  const finalSlug = Array.isArray(slug) ? slug.join("/") : slug;

  const res = await fetch(
    `${API_URL}/${source}/${pid}/${finalSlug}`,
    { cache: "no-store" }
  );

  if (res.status === 301 || res.status === 302) {
    const location = res.headers.get("location");
    if (location) redirect(location);
  }

  if (!res.ok) notFound();

  const post = await res.json();
  console.log(post);

 return (
    <PostLayoutClient>
      <PostPage post={post} />
    </PostLayoutClient>
  );
}
