import styles from './page.module.css';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About | EmotionWire',
    description: 'Learn about EmotionWire and our leadership team.',
  };
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Amit Dangle',
      role: 'Founder',
      bio: 'Seasoned marketing expert with 25 years of global experience. Amit developed EmotionWire to systematize the neuroscience behind branding.',
      imageUrl: null
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>Shaping the future of emotional branding.</p>
      </header>

      {teamMembers && teamMembers.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leadership Team</h2>
          <div className={styles.grid}>
            {teamMembers.map((member: any, idx: number) => (
              <div key={idx} className={styles.card}>
                {member.imageUrl ? (
                  <Image src={member.imageUrl} alt={member.name} width={150} height={150} style={{ borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover' }} />
                ) : (
                  <div className={styles.imagePlaceholder}>{member.name?.charAt(0)}</div>
                )}
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
