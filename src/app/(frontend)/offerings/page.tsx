import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Offerings | EmotionWire',
    description: 'Explore our services including Brand Positioning, Thought Leadership, SEO Content Programs, and more.',
  };
}

export default function OfferingsIndex() {
  const allOfferings = [
    { slug: 'brand-positioning-sprint', title: 'Brand Positioning Sprint' },
    { slug: 'founder-leadership-narrative-sprint', title: 'Founder Leadership Narrative Sprint' },
    { slug: 'b2b-website-messaging-audit-and-realigning', title: 'B2B Website Messaging Audit' }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Offerings</h1>
        <p className={styles.subtitle}>Branding, content, and GTM designed around how buyers actually decide.</p>
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
