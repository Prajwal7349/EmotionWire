import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(`*[_type == "resourcesPage"][0]{ seo }`, {}, { next: { revalidate: 60 } });
  
  return {
    title: pageData?.seo?.metaTitle || 'Resources | EmotionWire',
    description: pageData?.seo?.metaDescription || 'Discover whitepapers, blogs, and insights.',
  };
}

export default async function ResourcesPage() {
  const pageData = await client.fetch(`*[_type == "resourcesPage"][0]`, {}, { next: { revalidate: 60 } });
  
  // Fetch all blogs to show on the resources page
  const allBlogs = await client.fetch(`*[_type == "blog"] | order(publishedAt desc) {
    "slug": slug.current,
    title
  }`, {}, { next: { revalidate: 60 } });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData?.title || 'Resources & Insights'}</h1>
        <p className={styles.subtitle}>{pageData?.subtitle || 'Discover whitepapers, blogs, and insights.'}</p>
      </header>

      <div className={styles.grid}>
        {allBlogs.map((blog: any) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug} className={styles.card}>
            <div className={styles.cardType}>Blog</div>
            <h2 className={styles.cardTitle}>{blog.title}</h2>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
        {/* Placeholder for future whitepapers / other resource types */}
        {allBlogs.length === 0 && (
          <p style={{ color: 'var(--text-muted)' }}>More resources coming soon...</p>
        )}
      </div>
    </div>
  );
}
