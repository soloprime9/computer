import { notFound } from "next/navigation";
import PostDetail from "@/Components/PostDetail";

const API_URL = "https://applenews.onrender.com";

export default async function Page({ params }) {
  if (!params?.slug) notFound();

  const slug = params.slug.join("/");

  const res = await fetch(
    `${API_URL}/post-by-slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const post = await res.json();

  return (
    <main className="min-h-screen bg-white">
      <PostDetail post={post} />
    </main>
  );
}
