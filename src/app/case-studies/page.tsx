import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | EmotionWire',
  description: 'Explore our latest case studies and success stories.',
};

export default function CaseStudiesIndex() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Case Studies</h1>
        <p className={styles.subtitle}>Discover how we decode buyers' minds and drive emotional transformation.</p>
      </header>
      
      <div className={styles.grid}>
        {caseStudies.map((study, idx) => (
          <Link href={`/case-studies/${study.slug}`} key={study.slug} className={styles.card}>
            <div className={styles.cardNumber}>0{idx + 1}</div>
            <h2 className={styles.cardTitle}>{study.title}</h2>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
