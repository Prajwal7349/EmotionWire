import Link from 'next/link';
import { offerings } from '@/data/offerings';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offerings | EmotionWire',
  description: 'Explore our services including Brand Positioning, Thought Leadership, SEO Content Programs, and more.',
};

export default function OfferingsIndex() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Offerings</h1>
        <p className={styles.subtitle}>Branding, content, and GTM designed around how buyers actually decide.</p>
      </header>
      
      <div className={styles.grid}>
        {offerings.map((offering, idx) => (
          <Link href={`/offerings/${offering.slug}`} key={offering.slug} className={styles.card}>
            <div className={styles.cardNumber}>0{idx + 1}</div>
            <h2 className={styles.cardTitle}>{offering.title}</h2>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
