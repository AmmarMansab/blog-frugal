import axios from "axios";
const BASE_URL = "https://frugalmalefashionblog.com";

export const revalidate = 30 //seconds

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      //   "https://server.blog.digiunction.com/api/post/get-every"
      "https://server.blog.digiunction.com/api/post/get-all"
    );
    return response?.data?.posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
};

export default async function sitemap() {
  const posts = await fetchPosts();

  const site = posts?.map((post) => ({
    url: `${BASE_URL}/post/${post?._id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: "https://frugalmalefashionblog.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://frugalmalefashionblog.com/starthere",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.frugalmalefashionblog.com/category/65b4149b93f163dfa1be3e3c",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.frugalmalefashionblog.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...site
  ];
}
