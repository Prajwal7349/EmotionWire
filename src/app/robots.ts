import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/secret-dashboard/',
    },
    sitemap: 'https://emotionwire.com/sitemap.xml',
  }
}
