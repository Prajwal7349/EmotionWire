import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const OFFERINGS = [
  {
    slug: 'brand-positioning-sprint',
    title: 'Brand Positioning Sprint',
    subtitle: 'Define your market category and emotional resonance.',
    overview: [
      'In a crowded market, logic doesn\'t win. Emotion does.',
      'Our Brand Positioning Sprint helps you define a category-of-one positioning by uncovering the deepest emotional drivers of your buyers.'
    ],
    problem: {
      title: 'The Problem With Most Positioning',
      description: [
        'Most companies position themselves around features, benefits, or pricing. They end up sounding like everyone else.',
        'We position you around the emotional transformation your buyer is seeking.'
      ]
    },
    features: [
      {
        title: 'What You Get',
        items: [
          'Neuro-Marketing Brand Audit',
          'Emotional Positioning Statement',
          'Core Messaging Framework',
          'Go-to-Market Narrative'
        ]
      }
    ],
    outcome: 'A brand positioning that instantly resonates with your ideal buyers and makes your competitors irrelevant.'
  },
  {
    slug: 'founder-leadership-narrative-sprint',
    title: 'Founder Leadership Narrative Sprint',
    subtitle: 'Turn your story into your biggest asset.',
    overview: [
      'People buy from people. A strong founder narrative is often the difference between a stalled startup and a hyper-growth unicorn.'
    ],
    problem: {
      title: 'The Founder\'s Dilemma',
      description: [
        'Founders are often too close to their own product to communicate why it matters on a human level.'
      ]
    },
    features: [
      {
        title: 'What You Get',
        items: [
          'Founder Story Extraction',
          'Personal Brand Strategy',
          'Keynote & Pitch Deck Narrative',
          'Social Media Content Pillars'
        ]
      }
    ],
    outcome: 'A compelling leadership narrative that attracts top talent, secures funding, and builds unshakeable customer trust.'
  },
  {
    slug: 'b2b-website-messaging-audit-and-realigning',
    title: 'B2B Website Messaging Audit',
    subtitle: 'Optimize your website for the subconscious brain.',
    overview: [
      'Your website has 3 seconds to trigger the right emotional response. If it fails, the buyer leaves.'
    ],
    problem: {
      title: 'Why Websites Fail',
      description: [
        'They talk about "what" they do instead of "why" the buyer should care. They trigger cognitive overload instead of emotional safety.'
      ]
    },
    features: [
      {
        title: 'What You Get',
        items: [
          'Full Homepage Teardown',
          'Neuro-Design UX Assessment',
          'Copywriting Optimization Plan',
          'Conversion Rate Recommendations'
        ]
      }
    ],
    outcome: 'A high-converting website that speaks directly to the buyer\'s emotional brain.'
  }
];

export async function generateStaticParams() {
  return OFFERINGS.map((offering) => ({
    slug: offering.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const offering = OFFERINGS.find(o => o.slug === slug);
  if (!offering) return { title: 'Not Found' };
  
  return {
    title: `${offering.title} | EmotionWire`,
    description: offering.subtitle,
  };
}

export default async function OfferingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offering = OFFERINGS.find(o => o.slug === slug);
  
  if (!offering) {
    notFound();
  }

  const currentIndex = OFFERINGS.findIndex((o) => o.slug === slug);
  const nextOffering = OFFERINGS[(currentIndex + 1) % OFFERINGS.length] || OFFERINGS[0];

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
