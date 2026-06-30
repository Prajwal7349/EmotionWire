import { caseStudies } from '@/data/case-studies';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);
  if (!study) return { title: 'Not Found' };
  return {
    title: `${study.title} | EmotionWire Case Studies`,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);
  
  if (!study) {
    notFound();
  }

  // Find next study
  const currentIndex = caseStudies.findIndex(s => s.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <article className={styles.caseStudy}>
      <header className={styles.hero}>
        <h1 className={styles.title}>{study.title}</h1>
      </header>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <div className={styles.sectionBody}>
            {study.challenge.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Our Approach</div>
          <div className={styles.sectionBody}>
            {study.approach.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {study.engine && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>The Engine We Built</div>
            <div className={styles.sectionBody}>
              {study.engine.split('\n\n').map((para, i) => {
                // simple markdown bold parsing for "**bold**"
                const parts = para.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={i}>
                    {parts.map((part, index) => 
                      part.startsWith('**') && part.endsWith('**') 
                        ? <strong key={index}>{part.slice(2, -2)}</strong> 
                        : part
                    )}
                  </p>
                );
              })}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <div className={styles.sectionLabel}>The Emotional Shift</div>
          <div className={styles.sectionBody}>
            {study.emotionalShift.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>The Outcome</div>
          <div className={styles.sectionBody}>
            {study.outcome.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            
            {study.metrics && (
              <div className={styles.metricsGrid}>
                {study.metrics.map((metric, i) => (
                  <div key={i} className={styles.metricCard}>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <div className={styles.metricLabel}>{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {study.impact && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>The Impact</div>
            <div className={styles.sectionBody}>
              {study.impact.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}
      </div>

      <footer className={styles.footer}>
        <div className={styles.nextLabel}>Next Case Study</div>
        <Link href={`/case-studies/${nextStudy.slug}`} className={styles.nextLink}>
          {nextStudy.title} →
        </Link>
      </footer>
    </article>
  );
}
