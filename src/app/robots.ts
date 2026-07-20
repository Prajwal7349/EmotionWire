import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static';

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
