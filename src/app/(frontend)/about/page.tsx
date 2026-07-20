import styles from './page.module.css';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(`*[_type == "aboutPage"][0]{ seo }`, {}, { next: { revalidate: 60 } });
  
  return {
    title: pageData?.seo?.metaTitle || 'About | EmotionWire',
    description: pageData?.seo?.metaDescription || 'Learn about EmotionWire and our leadership team.',
  };
}

export default async function AboutPage() {
  const pageData = await client.fetch(`*[_type == "aboutPage"][0]{
    title,
    subtitle,
    "teamMembers": teamMembers[]{
      name, role, bio,
      "imageUrl": image.asset->url
    },
    "advisors": advisors[]{
      name, role, bio,
      "imageUrl": image.asset->url
    }
  }`, {}, { next: { revalidate: 60 } });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData?.title || 'About Us'}</h1>
        <p className={styles.subtitle}>{pageData?.subtitle || 'Shaping the future of emotional branding.'}</p>
      </header>

      {pageData?.teamMembers && pageData.teamMembers.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leadership Team</h2>
          <div className={styles.grid}>
            {pageData.teamMembers.map((member: any, idx: number) => (
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

      {pageData?.advisors && pageData.advisors.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Strategic Advisors</h2>
          <div className={styles.grid}>
            {pageData.advisors.map((advisor: any, idx: number) => (
              <div key={idx} className={styles.card}>
                {advisor.imageUrl ? (
                  <Image src={advisor.imageUrl} alt={advisor.name} width={150} height={150} style={{ borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover' }} />
                ) : (
                  <div className={styles.imagePlaceholder}>{advisor.name?.charAt(0)}</div>
                )}
                <h3 className={styles.name}>{advisor.name}</h3>
                <p className={styles.role}>{advisor.role}</p>
                <p className={styles.bio}>{advisor.bio}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
