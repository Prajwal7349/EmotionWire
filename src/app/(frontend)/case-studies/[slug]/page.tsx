import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const CASE_STUDIES = [
  {
    slug: 'full-funnel-growth-engine-security',
    title: 'Full Funnel Growth Engine for Security',
    clientName: 'Security Client',
    challenge: 'The client needed a predictable way to generate demand in a highly competitive security market.',
    approach: 'We built a neuroscience-backed funnel to target emotional triggers around risk and safety.',
    engine: 'A fully integrated demand generation and nurturing engine.',
    emotionalShift: 'From anxious uncertainty to confident security.',
    outcome: 'Increased pipeline by 300% in 6 months.',
    metrics: [
      { label: 'Pipeline Growth', value: '300%' },
      { label: 'Time to Value', value: '6 Months' }
    ],
    impact: 'Established the client as a trusted authority in the space.'
  },
  {
    slug: 'repositioning-it-services-brand',
    title: 'Repositioning IT Services Brand',
    clientName: 'IT Services Client',
    challenge: 'Struggling to differentiate in a crowded IT services landscape.',
    approach: 'Repositioned the brand around the emotion of relief and reliability.',
    engine: 'A new brand identity and go-to-market strategy.',
    emotionalShift: 'From commoditized vendor to strategic partner.',
    outcome: 'Increased win rates by 45%.',
    metrics: [
      { label: 'Win Rate Increase', value: '45%' }
    ],
    impact: 'Enabled the sales team to command higher pricing.'
  },
  {
    slug: 'us-lead-generation-saas',
    title: 'US Lead Generation SaaS',
    clientName: 'SaaS Client',
    challenge: 'Needed to break into the US market with a limited budget.',
    approach: 'Leveraged high-emotion content and targeted outbound campaigns.',
    engine: 'Automated outbound engine combined with thought leadership.',
    emotionalShift: 'From unknown entity to credible challenger.',
    outcome: 'Generated 50+ qualified enterprise meetings in Q1.',
    metrics: [
      { label: 'Enterprise Meetings', value: '50+' }
    ],
    impact: 'Successfully established a foothold in the US market.'
  }
];

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find(s => s.slug === slug);
  if (!study) return { title: 'Not Found' };
  
  return {
    title: `${study.title} | EmotionWire Case Studies`,
    description: study.challenge,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find(s => s.slug === slug);
  
  if (!study) {
    notFound();
  }

  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length] || CASE_STUDIES[0];

  return (
    <article className={styles.caseStudy}>
      <header className={styles.hero}>
        <h1 className={styles.title}>{study.title}</h1>
      </header>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <div className={styles.sectionBody}>
            {study.challenge?.split('\n\n').map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Our Approach</div>
          <div className={styles.sectionBody}>
            {study.approach?.split('\n\n').map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {study.engine && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>The Engine We Built</div>
            <div className={styles.sectionBody}>
              {study.engine.split('\n\n').map((para: string, i: number) => {
                const parts = para.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={i}>
                    {parts.map((part: string, index: number) => 
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
            {study.emotionalShift?.split('\n\n').map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>The Outcome</div>
          <div className={styles.sectionBody}>
            {study.outcome?.split('\n\n').map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
            
            {study.metrics && (
              <div className={styles.metricsGrid}>
                {study.metrics.map((metric: any, i: number) => (
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
              {study.impact.split('\n\n').map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}
      </div>

      <section className={styles.footer}>
        <div className={styles.nextLabel}>Next Case Study</div>
        <Link href={`/case-studies/${nextStudy.slug}`} className={styles.nextLink}>
          {nextStudy.title} →
        </Link>
      </section>
      
      <Footer />
    </article>
  );
}
