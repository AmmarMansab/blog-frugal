"use client";
import { useState, useEffect } from "react";
import { generateSitemap } from "@/utils/generateSitemap";

const Hero = () => {
  const [sitemapXml, setSitemapXml] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const xml = await generateSitemap(); // Generate sitemap on the client-side
        console.log(xml)
        setSitemapXml(xml);
      } catch (error) {
        console.error("Error fetching sitemap:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{sitemapXml}</pre>
      )}
    </div>
  );
};

export default Hero;
