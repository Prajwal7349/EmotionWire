import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';

export async function generateStaticParams() {
  const sanityOfferings = await client.fetch(`*[_type == "offering"] { "slug": slug.current }`);
  return sanityOfferings;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const offering = await client.fetch(`*[_type == "offering" && slug.current == $slug][0]{ title, seo }`, { slug });
  if (!offering) return { title: 'Not Found' };
  return {
    title: offering.seo?.metaTitle || `${offering.title} | EmotionWire`,
    description: offering.seo?.metaDescription,
  };
}

export default async function OfferingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offering = await client.fetch(`*[_type == "offering" && slug.current == $slug][0] {
    ...,
    "slug": slug.current
  }`, { slug });
  
  if (!offering) {
    notFound();
  }

  // Find next offering
  const allOfferings = await client.fetch(`*[_type == "offering"] | order(orderRank) { "slug": slug.current, title }`);
  const currentIndex = allOfferings.findIndex((o: any) => o.slug === slug);
  const nextOffering = allOfferings[(currentIndex + 1) % allOfferings.length] || allOfferings[0];

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
              {offering.overview.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {offering.problem && offering.problem.title && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>{offering.problem.title}</div>
            <div className={styles.sectionBody}>
              {offering.problem.description.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {offering.features && offering.features.length > 0 && offering.features.map((featureBlock: any, idx: number) => (
          <section key={idx} className={styles.section}>
            <div className={styles.sectionLabel}>{featureBlock.title}</div>
            <div className={styles.sectionBody}>
              <ul className={styles.list}>
                {featureBlock.items.map((item: string, i: number) => (
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
