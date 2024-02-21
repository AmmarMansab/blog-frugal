import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Frugal Male Fashion Blog',
  description: 'Discover the latest trends and tips for frugal male fashion blog. Stay stylish without breaking the bank.',
  siteUrl: 'https://frugalmalefashionblog.com', // Update with your actual URL
  imageUrl: 'https://yourblog.com/cover-image.jpg', // Update with your actual image URL
  twitterHandle: '@yourTwitterHandle', // Update with your actual Twitter handle
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '../images/icon.svg',
        href: '../images/icon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '../images/icon.svg',
        href: '../images/icon.svg',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        {/* <link rel="icon" href="../images/icon.svg"/> */}
        <meta name="description" content={metadata.description} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:creator" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Fonts Import */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.siteUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "${metadata.title}",
            "description": "${metadata.description}",
            "url": "${metadata.siteUrl}",
            "inLanguage": "en"
          }`}
        </script>

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href={`${metadata.siteUrl}/sitemap.xml`} />

        {/* Preload Fonts */}
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" crossorigin="anonymous" />

        {/* Performance Optimization */}
        <link rel="dns-prefetch" href="https://yourblog.com" />
        <link rel="preconnect" href="https://yourblog.com" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-KHF7NXLB" />
      <GoogleAnalytics gaId="G-SSWJMDLD9F" />
    </html>
  );
}
