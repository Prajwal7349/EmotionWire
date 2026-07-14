import { offerings } from '@/data/offerings';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return offerings.map((offering) => ({
    slug: offering.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const offering = offerings.find(o => o.slug === slug);
  if (!offering) return { title: 'Not Found' };
  return {
    title: `${offering.title} | EmotionWire Offerings`,
  };
}

export default async function OfferingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offering = offerings.find(o => o.slug === slug);
  
  if (!offering) {
    notFound();
  }

  // Find next offering
  const currentIndex = offerings.findIndex(o => o.slug === slug);
  const nextOffering = offerings[(currentIndex + 1) % offerings.length];

  return (
    <article className={styles.offering}>
      <header className={styles.hero}>
        <h1 className={styles.title}>{offering.title}</h1>
        <p className={styles.subtitle}>{offering.subtitle}</p>
      </header>
      
      <div className={styles.content}>
        {offering.overview && offering.overview.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>Overview</div>
            <div className={styles.sectionBody}>
              {offering.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {offering.problem && offering.problem.title && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>{offering.problem.title}</div>
            <div className={styles.sectionBody}>
              {offering.problem.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {offering.features && offering.features.length > 0 && offering.features.map((featureBlock, idx) => (
          <section key={idx} className={styles.section}>
            <div className={styles.sectionLabel}>{featureBlock.title}</div>
            <div className={styles.sectionBody}>
              <ul className={styles.list}>
                {featureBlock.items.map((item, i) => (
                  <li key={i} className={styles.listItem}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {offering.outcome && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>The Outcome</div>
            <div className={styles.sectionBody}>
              <div className={styles.outcome}>
                {offering.outcome}
              </div>
            </div>
          </section>
        )}
      </div>

      <section className={styles.footer}>
        <div className={styles.nextLabel}>Next Offering</div>
        <Link href={`/offerings/${nextOffering.slug}`} className={styles.nextLink}>
          {nextOffering.title} →
        </Link>
      </section>
      
      <Footer />
    </article>
  );
}
