import { promises as fsPromises } from 'fs';
import path from 'path';
import { create } from 'xmlbuilder'
// import { useGetPosts } from './src/app/api/blog.js';
import axios from 'axios';

const currentModuleUrl = new URL(import.meta.url);
const currentModuleDir = path.dirname(decodeURIComponent(currentModuleUrl.pathname));
const pagesDir = path.join(currentModuleDir, 'src/app') // Change this to your actual pages directory
const baseUrls = ['https://frugalmalefashionblog.com'] // Change this to your website's base URL

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://server.blog.digiunction.com/api/post/get-all?page=0');
    return response?.data?.posts;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
};

export const generateSitemap = async () => {
  const sitemap = create('urlset').att(
    'xmlns',
    'http://www.sitemaps.org/schemas/sitemap/0.9'
  )

  // const { posts, postsLoading } = useGetPosts();
  const posts = await fetchPosts();
  posts?.forEach((post) => {
    baseUrls.forEach((baseUrl) => {
      const url = `${baseUrl}/post/${post._id}`;
      sitemap.ele('url').ele('loc', url);
    });
  });


  console.log("Sitemap generated!!!")

  // const walk = async dir => {
  //   const files = await fsPromises.readdir(dir)

  //   for (const file of files) {
  //     const filePath = path.join(dir, file)
  //     const stat = await fsPromises.stat(filePath)

  //     if (stat.isDirectory()) {
  //       await walk(filePath)
  //     } else if (file !== 'sitemap.xml' && file.endsWith('.js')) {
  //       const routePath = path
  //         .relative(pagesDir, filePath)
  //         .replace('.js', '')
  //         .replace(/\\/g, '/')
  //         .replace(/^index$/, '')
  //         .replace('/index', '')

  //       baseUrls.map(baseUrl => {
  //         const url = `${baseUrl}/${routePath}`

  //         sitemap.ele('url').ele('loc', url)
  //       })
  //     }
  //   }
  // }

  // await walk(pagesDir)

  const sitemapXml = sitemap.end({ pretty: true })

  fsPromises.writeFile('./public/sitemap.xml', sitemapXml)
}

generateSitemap().catch(error =>
  console.error('Error generating sitemap:', error)
)
