import styles from './page.module.css';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await client.fetch(`*[_type == "homePage"][0]{ seo }`, {}, { next: { revalidate: 60 } });
  if (homeData?.seo) {
    return {
      title: homeData.seo.metaTitle,
      description: homeData.seo.metaDescription,
    };
  }
  return {};
}

export default async function Home() {
  const homeData = await client.fetch(`*[_type == "homePage"][0]`, {}, { next: { revalidate: 60 } });

  const heroTitle = homeData?.hero?.title || "We decode your buyers' minds before they <span class=\"accentRed\">even know</span> what drives them.";
  const heroSubtitle = homeData?.hero?.subtitle || "We are a neuroscience-powered branding and communication agency specializing in uncovering the subconscious influences behind purchasing decisions. We align your brand with the emotional triggers that lead to real-world results.";
  
  const whatWeDo = homeData?.whatWeDo || [
    {
      title: 'Brand Strategy & Emotional Positioning',
      description: 'We build emotionally intelligent brands grounded in neuroscience and strategically aligned for success.',
      bullets: ['Brand Archetype Development', 'Persona Creation Using Plutchik’s Wheel', 'Strategic Branding & Communications', 'Neuromarketing Audits & Brand Diagnosis']
    },
    {
      title: 'Emotion-Driven Content & Campaigns',
      description: 'Our content doesn’t just inform, it influences. We craft messages that speak directly to the subconscious, driving real behavior change.',
      bullets: ['Neuro-Based Content Creation', 'Behavioral Design Campaigns', 'SEO Strategy with Emotional Intelligence']
    },
    {
      title: 'Go-to-Market & Experience Design',
      description: 'We design emotional experiences and market-entry strategies tailored to meet your audience exactly where they are both psychologically and contextually.',
      bullets: ['Emotional Journey Mapping & CX Strategy', 'Channel Optimization & Go-to-Market Planning']
    }
  ];

  const tickerItems = homeData?.ticker || [
    "\"EmotionWire brought brand consistency that shines through all our communications.\" — Amazatic",
    "\"They helped build our brand from the ground up, forging emotional connections.\" — GoD2C.ai"
  ];

  const frameworkSteps = homeData?.framework?.steps || [
    "Understand the buyer's psychological foundations",
    "Surface emotional outcomes they seek or avoid",
    "Decode cognitive and emotional behavior",
    "Craft a personality that aligns with needs",
    "Design an emotional journey using Plutchik's Wheel",
    "Turn emotional insight into compelling content",
    "Deliver consistent emotional experience",
    "Track engagement, sentiment, and conversion"
  ];

  const storyParagraphs = homeData?.story || [
    "Founded in 2025 by Amit Dangle, a seasoned marketing expert with 25 years of global experience, EmotionWire was inspired by the realization that emotion-led selling doesn’t just resonate, it delivers measurable revenue growth and sustainable competitive advantage.",
    "Leveraging deep expertise in emotional influence and behavioral science, Amit developed EmotionWire to systematize the neuroscience behind branding. Our structured frameworks help brands influence hearts and minds simultaneously, ensuring emotional connections translate directly into business outcomes."
  ];
  
  const storyClosing = homeData?.storyClosing || "We don’t merely believe in emotional branding, we engineer it for measurable success.";

  return (
    <>
      <header className={`${styles.hero} section`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: heroTitle.replace('class="accentRed"', `class="${styles.accentRed}"`) }} />
          <p className={styles.heroSubtitle}>
            {heroSubtitle}
          </p>
          <div className={styles.heroActions}>
            <Link href="/case-studies" className="button primary">Explore Our Work</Link>
          </div>
        </div>
      </header>

      <section id="what-we-do" className={`${styles.services} section`}>
        <div className="container">
          <h2>What We Do</h2>
          <div className={styles.grid}>
            {whatWeDo.map((service: any, idx: number) => (
              <div key={idx} className={styles.card}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.bullets?.map((bullet: string, i: number) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.tickerSection}`}>
        <div className={styles.tickerOuter}>
          <div className={styles.tickerInner}>
            {tickerItems.map((item: string, idx: number) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="framework" className={`${styles.framework} section`}>
        <div className="container">
          <h2>{homeData?.framework?.title || 'Deterministic Path Framework'}</h2>
          <p className={styles.intro}>{homeData?.framework?.intro || 'A proven 8-step process transforming brands from mere noise into indispensable market leaders.'}</p>
          <div className={styles.stepperContainer}>
            {frameworkSteps.map((step: string, index: number) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>{(index + 1).toString().padStart(2, '0')}</div>
                <div className={styles.stepText}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="our-story" className={`${styles.story} section`}>
        <div className="container">
          <h2>{homeData?.storyTitle || "Our Story"}</h2>
          <div className={styles.storyContent}>
            {storyParagraphs.map((para: string, idx: number) => (
              <p key={idx}>{para}</p>
            ))}
            <h3>{storyClosing}</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
