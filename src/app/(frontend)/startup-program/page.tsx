import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../offerings/[slug]/page.module.css';

export const metadata: Metadata = {
  title: 'Startup Program | EmotionWire',
  description: 'Build for Growth, Not Just for Clout. EmotionWire’s Startup Program is designed for founders who want to turn early-stage momentum into an emotionally inevitable brand.',
};

export default function StartupProgramPage() {
  return (
    <article className={styles.offering}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Build for Growth, Not Just for Clout</h1>
        <p className={styles.subtitle}>Program for Startups</p>
      </header>

      <div className={styles.content}>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <div className={styles.sectionBody}>
            <p>Most startups obsess over logos, landing pages, and ad budgets.</p>
            <p>We help you build something deeper: a neuroscience-powered brand and go-to-market engine that rewires how buyers feel about your product before they ever compare features.</p>
            <p>EmotionWire’s Startup Program is designed for founders who want to turn early-stage momentum into an emotionally inevitable brand - backed by clear business and marketing strategy, not just creative flair.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Why This Program Exists</div>
          <div className={styles.sectionBody}>
            <p>Growing companies rarely lose because their product is bad.</p>
            <p>They lose because buyers never form strong emotional memories, never feel safe choosing them, or never understand what the brand really stands for.</p>
            <p>EmotionWire exists to solve that gap.</p>
            <p>We use neuroscience, behavioral research, and emotional design to uncover the subconscious influences behind purchasing decisions, then align your positioning, demand generation, sales conversations, and revenue model with those emotional realities.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>What a Startup Actually Needs</div>
          <div className={styles.sectionBody}>
            <p>This program is built for the messy middle of startup growth - when you have something real, but the market still treats you like “just another option.”</p>
            <p>Instead of handing you a brand book and walking away, we work with you on six foundations:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}><strong>Buyer psychology, not just buyer persona:</strong> We don’t just ask who your customer is; we investigate how their biology, environment, culture, and past experiences shape their default emotional responses and decision-making shortcuts.</li>
              <li className={styles.listItem}><strong>A clear emotional promise:</strong> Together, we define the core emotions your brand must reliably trigger - trust, relief, confidence, anticipation - and the ones it must avoid, then turn that into a simple emotional promise your team can use everywhere.</li>
              <li className={styles.listItem}><strong>A coherent business + marketing strategy (our real differentiator):</strong> We design the bridge between story and revenue: who you sell to, how you reach them, what offers you lead with, which buying journeys you support, and how marketing and sales stay emotionally consistent from first touch to renewal.</li>
              <li className={styles.listItem}><strong>A distinct personality and narrative:</strong> Using archetypes and emotional design, we help you choose the “role” your brand plays in your buyer’s story - caregiver, challenger, guide, ally - and build narratives that make you feel human, specific, and hard to ignore.</li>
              <li className={styles.listItem}><strong>An engineered emotional journey across the funnel:</strong> We choreograph the emotions your buyer should feel at each stage - curiosity, clarity, trust, urgency, satisfaction - and build messaging, content, and sales assets that speak to fast, intuitive System 1 responses, backed by enough System 2 logic to justify the decision.</li>
              <li className={styles.listItem}><strong>Emotional KPIs and continuous refinement:</strong> Beyond clicks and MQLs, we help you track sentiment, perceived trust, narrative recall, and emotional engagement, then use that feedback to refine your positioning, campaigns, and sales story as you grow.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Our Edge: Strategy That Thinks Like a Brain, Not a Funnel</div>
          <div className={styles.sectionBody}>
            <p>Most branding and creative shops stop at “look, feel, and campaigns.” EmotionWire goes further: we hard-wire your emotional narrative into the way your business actually grows.</p>
            <p><strong>Business & Marketing Strategy Consulting, Baked In</strong><br />You’re not just getting better messaging - you’re getting a strategy spine:</p>
            <ul className={styles.list} style={{ marginBottom: '1.5rem' }}>
              <li className={styles.listItem}><strong>Market and revenue architecture:</strong> We clarify the category you play in, the sub-segment you can genuinely own, and the revenue model that best fits your emotional promise (self-serve, sales-led, PLG-assisted, or hybrid).</li>
              <li className={styles.listItem}><strong>Go-to-market and demand design:</strong> We build a demand strategy that feels like one coherent story: channels, content themes, outbound, and partnerships all working together to reinforce the same emotional signals instead of random tactical experiments.</li>
              <li className={styles.listItem}><strong>Sales narrative and enablement:</strong> Emotional insight is translated into discovery scripts, demo flows, objection-handling narratives, and proposals that feel confident, human, and psychologically aware - so your sales motion doesn’t break the brand your marketing is trying to build.</li>
            </ul>
            <p>This is where we’re different: we don’t separate “brand work” from “business work.”<br />Your emotional positioning, marketing strategy, and sales execution are treated as one system.</p>
          </div>
        </section>

        <section className={styles.section} style={{ display: 'block' }}>
          <div className={styles.sectionLabel} style={{ width: '100%', marginBottom: '1.5rem' }}>Tiered Paths for Different Startup Stages</div>
          <div className={styles.sectionBody} style={{ maxWidth: '100%' }}>
            <p style={{ maxWidth: '800px' }}>You can enter the Startup Program at the tier that matches your stage and ambition. Each tier represents a deeper level of emotional and strategic maturity.</p>

            <div style={{ overflowX: 'auto', marginTop: '3rem', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(0, 50, 116, 0.2)' }}>
                    <th style={{ padding: '1rem 0.5rem', width: '12%' }}></th>
                    <th style={{ padding: '1rem 0.5rem', color: 'var(--accent-gold)', width: '22%', fontSize: '1.05rem', verticalAlign: 'bottom' }}>1. Signal Lab</th>
                    <th style={{ padding: '1rem 0.5rem', color: 'var(--accent-gold)', width: '22%', fontSize: '1.05rem', verticalAlign: 'bottom' }}>2. Traction Engine</th>
                    <th style={{ padding: '1rem 0.5rem', color: 'var(--accent-gold)', width: '22%', fontSize: '1.05rem', verticalAlign: 'bottom' }}>3. Momentum Architect</th>
                    <th style={{ padding: '1rem 0.5rem', color: 'var(--accent-gold)', width: '22%', fontSize: '1.05rem', verticalAlign: 'bottom' }}>4. Category Narrative Lab</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(0, 50, 116, 0.1)' }}>
                    <th style={{ padding: '1rem 0.5rem', color: 'var(--accent-gold)', fontWeight: 500, verticalAlign: 'top' }}>Perfect For</th>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', fontStyle: 'italic', color: 'var(--text-muted)' }}>Pre-seed, MVP, or very early revenue.</td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', fontStyle: 'italic', color: 'var(--text-muted)' }}>Startups with early revenue, active campaigns, and a growing pipeline.</td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', fontStyle: 'italic', color: 'var(--text-muted)' }}>Post-PMF teams ready to scale demand, deals, and brand all at once.</td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', fontStyle: 'italic', color: 'var(--text-muted)' }}>Scaling startups aiming to define or reshape a category.</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid rgba(0, 50, 116, 0.1)' }}>
                    <th style={{ padding: '1rem 0.5rem', color: 'var(--accent-gold)', fontWeight: 500, verticalAlign: 'top' }}>What We Do</th>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top' }}>
                      <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>You have an idea, a product, or a prototype - and now you need a story and emotional foundation that doesn’t feel generic. In Signal Lab, we help you:</p>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Sharpen your problem-emotion fit and map the real emotional stakes behind your solution.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Define your core emotional promise and brand archetype.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Craft a founder-level narrative that gives investors, early customers, and hires a clear, compelling way to talk about you.</li>
                      </ul>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top' }}>
                      <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>You’re getting interest, but your story, funnel, and sales conversations still feel fragmented. In Traction Engine, we:</p>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Clarify your ideal customer profile and buying triggers at both rational and emotional levels.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Align your positioning, offers, and messaging with a coherent emotional storyline.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Design an emotionally consistent GTM: channels, content themes, outbound narratives, and top-of-funnel experiences tied directly to the way your buyers think and feel.</li>
                      </ul>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top' }}>
                      <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>You know your product works. Now you need a scalable, emotionally intelligent system for growth. In Momentum Architect, we:</p>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Architect your full marketing + sales funnel with emotional checkpoints at each stage.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Build playbooks that keep brand, campaigns, and sales behavior in sync as you hire and grow.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Use emotional KPIs alongside commercial metrics (pipeline, win rates, deal velocity, expansion) to steer strategic decisions.</li>
                      </ul>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top' }}>
                      <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>You’re no longer just “a product.” You want to become a reference point - a brand buyers use to judge everyone else. In Category Narrative Lab, we:</p>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Develop a psychologically sticky category narrative that reframes how the market thinks about your space.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Design emotionally charged flagship campaigns and thought leadership that consistently pull your brand into high-value conversations.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Provide ongoing strategic guidance so your brand, marketing, and sales stay aligned as you expand, raise, and enter new markets.</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ padding: '1rem 0.5rem', color: 'var(--accent-gold)', fontWeight: 500, verticalAlign: 'top' }}>Outcome</th>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>
                      A clear emotional spine for your brand and a positioning narrative that finally feels like you, not a template.
                    </td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>
                      A demand engine that doesn’t just chase clicks - it builds desire, trust, and momentum toward real conversations and real deals.
                    </td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>
                      A growth engine where every touchpoint - ad, email, call, demo, contract - reinforces the same emotional promise and strategic direction.
                    </td>
                    <td style={{ padding: '1rem 0.5rem', verticalAlign: 'top', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>
                      A category story and emotional position that make your startup feel less like an option and more like a default.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Who This Is For</div>
          <div className={styles.sectionBody}>
            <p>This program is for founders and teams who:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Believe emotion and psychology are not “soft topics,” but the real drivers of growth.</li>
              <li className={styles.listItem}>Are tired of safe, copy-paste branding that looks good in decks but disappears in the market.</li>
              <li className={styles.listItem}>Want a partner who can talk neuroscience, positioning, GTM, and pipeline in the same conversation - and then help execute.</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </article>
  );
}
