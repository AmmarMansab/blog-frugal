import { create } from 'xmlbuilder';
import axios from 'axios';

const generateSitemapXml = (posts) => {
  const sitemap = create('urlset').att(
    'xmlns',
    'http://www.sitemaps.org/schemas/sitemap/0.9'
  );

  posts.forEach((post) => {
    // const url = `${process.env.NEXT_PUBLIC_BASE_URL}/post/${post._id}`;
    const url = `https://frugalmalefashionblog.com/post/${post._id}`;
    sitemap.ele('url').ele('loc', url);
  });

  return sitemap.end({ pretty: true });
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(
      'https://server.blog.digiunction.com/api/post/get-all?page=0'
    );
    return response?.data?.posts;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
};

export const generateSitemap = async () => {
  const posts = await fetchPosts();
  return generateSitemapXml(posts);
};
