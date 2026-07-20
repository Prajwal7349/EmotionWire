import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Case Studies | EmotionWire',
    description: 'Explore our latest case studies and success stories.',
  };
}

export default function CaseStudiesIndex() {
  const allCaseStudies = [
    {
      slug: 'full-funnel-growth-engine-security',
      title: 'Full Funnel Growth Engine for Security',
      clientName: 'Security Client'
    },
    {
      slug: 'repositioning-it-services-brand',
      title: 'Repositioning IT Services Brand',
      clientName: 'IT Services Client'
    },
    {
      slug: 'us-lead-generation-saas',
      title: 'US Lead Generation SaaS',
      clientName: 'SaaS Client'
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Case Studies</h1>
        <p className={styles.subtitle}>Discover how we decode buyers' minds and drive emotional transformation.</p>
      </header>
      
      <div className={styles.grid}>
        {allCaseStudies.map((study: any, idx: number) => (
          <Link href={`/case-studies/${study.slug}`} key={study.slug} className={styles.card}>
            <div className={styles.cardNumber}>{(idx + 1).toString().padStart(2, '0')}</div>
            <h2 className={styles.cardTitle}>{study.title}</h2>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
