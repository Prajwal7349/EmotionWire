import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Resources | EmotionWire',
    description: 'Discover whitepapers, blogs, and insights.',
  };
}

export default function ResourcesPage() {
  const allBlogs: any[] = []; // Placeholder for static blogs

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Resources & Insights</h1>
        <p className={styles.subtitle}>Discover whitepapers, blogs, and insights.</p>
      </header>

      <div className={styles.grid}>
        {allBlogs.map((blog: any) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug} className={styles.card}>
            <div className={styles.cardType}>Blog</div>
            <h2 className={styles.cardTitle}>{blog.title}</h2>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
        {allBlogs.length === 0 && (
          <p style={{ color: 'var(--text-muted)' }}>More resources coming soon...</p>
        )}
      </div>
    </div>
  );
}
