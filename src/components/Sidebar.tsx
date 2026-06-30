import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="EmotionWire Logo" />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/#what-we-do">What We Do</Link>
          <Link href="/#framework">Framework</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/#our-story">Our Story</Link>
        </div>
        <div className={styles.navContact}>
          <a href="/#contact" className={`button ${styles.navButton}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
