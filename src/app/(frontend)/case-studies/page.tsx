import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

import { client } from '@/sanity/lib/client';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(`*[_type == "caseStudiesPage"][0]{ seo }`, {}, { next: { revalidate: 60 } });
  
  return {
    title: pageData?.seo?.metaTitle || 'Case Studies | EmotionWire',
    description: pageData?.seo?.metaDescription || 'Explore our latest case studies and success stories.',
  };
}

export default async function CaseStudiesIndex() {
  const pageData = await client.fetch(`*[_type == "caseStudiesPage"][0]`, {}, { next: { revalidate: 60 } });
  const allCaseStudies = await client.fetch(`*[_type == "caseStudy"] | order(orderRank) {
    "slug": slug.current,
    title,
    clientName
  }`, {}, { next: { revalidate: 60 } });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData?.title || 'Case Studies'}</h1>
        <p className={styles.subtitle}>{pageData?.subtitle || 'Discover how we decode buyers\' minds and drive emotional transformation.'}</p>
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
