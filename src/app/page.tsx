import styles from './page.module.css';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
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
          <h1 className={styles.heroTitle}>
            We decode your buyers&apos; minds before they <span className={styles.accentRed}>even know</span> what drives them.
          </h1>
          <p className={styles.heroSubtitle}>
            We are a neuroscience-powered branding and communication agency specializing in uncovering the subconscious influences behind purchasing decisions. We align your brand with the emotional triggers that lead to real-world results.
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
            <div className={styles.card}>
              <h3>Brand Strategy & Emotional Positioning</h3>
              <p>We build emotionally intelligent brands grounded in neuroscience and strategically aligned for success.</p>
              <ul>
                <li>Brand Archetype Development</li>
                <li>Persona Creation Using Plutchik’s Wheel</li>
                <li>Strategic Branding & Communications</li>
                <li>Neuromarketing Audits & Brand Diagnosis</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Emotion-Driven Content & Campaigns</h3>
              <p>Our content doesn’t just inform, it influences. We craft messages that speak directly to the subconscious, driving real behavior change.</p>
              <ul>
                <li>Neuro-Based Content Creation</li>
                <li>Behavioral Design Campaigns</li>
                <li>SEO Strategy with Emotional Intelligence</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Go-to-Market & Experience Design</h3>
              <p>We design emotional experiences and market-entry strategies tailored to meet your audience exactly where they are both psychologically and contextually.</p>
              <ul>
                <li>Emotional Journey Mapping & CX Strategy</li>
                <li>Channel Optimization & Go-to-Market Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.tickerSection}`}>
        <div className={styles.tickerOuter}>
          <div className={styles.tickerInner}>
            <span>&quot;EmotionWire brought brand consistency that shines through all our communications.&quot; — Amazatic</span>
            <span>&quot;They helped build our brand from the ground up, forging emotional connections.&quot; — GoD2C.ai</span>
          </div>
        </div>
      </section>

      <section id="framework" className={`${styles.framework} section`}>
        <div className="container">
          <h2>Deterministic Path Framework</h2>
          <p className={styles.intro}>A proven 8-step process transforming brands from mere noise into indispensable market leaders.</p>
          <div className={styles.stepperContainer}>
            {[
              "Understand the buyer's psychological foundations",
              "Surface emotional outcomes they seek or avoid",
              "Decode cognitive and emotional behavior",
              "Craft a personality that aligns with needs",
              "Design an emotional journey using Plutchik's Wheel",
              "Turn emotional insight into compelling content",
              "Deliver consistent emotional experience",
              "Track engagement, sentiment, and conversion"
            ].map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>0{index + 1}</div>
                <div className={styles.stepText}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="our-story" className={`${styles.story} section`}>
        <div className="container">
          <h2>Our Story</h2>
          <div className={styles.storyContent}>
            <p>Founded in 2025 by Amit Dangle, a seasoned marketing expert with 25 years of global experience, EmotionWire was inspired by the realization that emotion-led selling doesn’t just resonate, it delivers measurable revenue growth and sustainable competitive advantage.</p>
            <p>Leveraging deep expertise in emotional influence and behavioral science, Amit developed EmotionWire to systematize the neuroscience behind branding. Our structured frameworks help brands influence hearts and minds simultaneously, ensuring emotional connections translate directly into business outcomes.</p>
            <h3>We don’t merely believe in emotional branding, we engineer it for measurable success.</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
