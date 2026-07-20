import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

import { client } from '@/sanity/lib/client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(`*[_type == "offeringsPage"][0]{ seo }`, {}, { next: { revalidate: 60 } });
  
  return {
    title: pageData?.seo?.metaTitle || 'Offerings | EmotionWire',
    description: pageData?.seo?.metaDescription || 'Explore our services including Brand Positioning, Thought Leadership, SEO Content Programs, and more.',
  };
}

export default async function OfferingsIndex() {
  const pageData = await client.fetch(`*[_type == "offeringsPage"][0]`, {}, { next: { revalidate: 60 } });
  const allOfferings = await client.fetch(`*[_type == "offering"] | order(orderRank) {
    "slug": slug.current,
    title
  }`, {}, { next: { revalidate: 60 } });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData?.title || 'Offerings'}</h1>
        <p className={styles.subtitle}>{pageData?.subtitle || 'Branding, content, and GTM designed around how buyers actually decide.'}</p>
      </header>
      
      <div className={styles.grid}>
        {allOfferings.map((offering: any, idx: number) => (
          <Link href={`/offerings/${offering.slug}`} key={offering.slug} className={styles.card}>
            <div className={styles.cardNumber}>{(idx + 1).toString().padStart(2, '0')}</div>
            <h2 className={styles.cardTitle}>{offering.title}</h2>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
