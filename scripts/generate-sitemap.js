import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your website's base URL - update this to your actual domain
const BASE_URL = 'https://magxordigital.netlify.app';

// Define all your routes with their priorities and change frequencies
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/nosotros',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/servicios',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/portfolio',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/faq',
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    path: '/contacto',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/plan-details',
    priority: '0.6',
    changefreq: 'monthly'
  },
  {
    path: '/jingle-details',
    priority: '0.6',
    changefreq: 'monthly'
  },
  {
    path: '/logo-details',
    priority: '0.6',
    changefreq: 'monthly'
  },
  {
    path: '/trabaja-con-nosotros',
    priority: '0.7',
    changefreq: 'monthly'
  }
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

function createSitemapFile() {
  try {
    // Ensure the public directory exists
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate and write the sitemap
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    console.log(`📍 Your sitemap will be available at: ${BASE_URL}/sitemap.xml`);
    console.log(`📊 Generated ${routes.length} URLs in the sitemap`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the sitemap generation
createSitemapFile();