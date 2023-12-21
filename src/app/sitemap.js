import { useGetPosts } from "../app/api/blog";

const URL = "https://claritydev.net";

export default async function sitemap() {
  const { posts: allPosts, postsLoading } = useGetPosts();

  const posts = allPosts.map(({ _id, createdAt }) => ({
    url: `${URL}/blog/${_id}`,
    lastModified: createdAt,
  }));

  const routes = ["", "/portfolio", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
