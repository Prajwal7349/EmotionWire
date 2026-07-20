'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.module.css';

export default function Sidebar({ hasBlogs = false }: { hasBlogs?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <div className={styles.navInner}>
          <div className={styles.navHeader}>
            <div className={styles.logo}>
              <Link href="/" onClick={closeMenu}>
                <Image
                  src="/Logo.png"
                  alt="EmotionWire Logo"
                  width={240}
                  height={240}
                  priority
                />
              </Link>
            </div>

            <button
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className={`${styles.hamburgerLine} ${isOpen ? styles.lineOpen1 : ''}`}></div>
              <div className={`${styles.hamburgerLine} ${isOpen ? styles.lineOpen2 : ''}`}></div>
              <div className={`${styles.hamburgerLine} ${isOpen ? styles.lineOpen3 : ''}`}></div>
            </button>
          </div>

          <div className={`${styles.navMenu} ${isOpen ? styles.menuOpen : ''}`}>
            <div className={styles.navLinks}>
              <Link href="/#what-we-do" onClick={closeMenu}>What We Do</Link>
              <Link href="/#framework" onClick={closeMenu}>Framework</Link>
              <Link href="/offerings" onClick={closeMenu}>Offerings</Link>
              <Link href="/startup-program" onClick={closeMenu}>Startup Program</Link>
              <Link href="/case-studies" onClick={closeMenu}>Case Studies</Link>
              {hasBlogs && <Link href="/blogs" onClick={closeMenu}>Blogs</Link>}
              <Link href="/#our-story" onClick={closeMenu}>Our Story</Link>
            </div>
            <div className={styles.navContact}>
              <Link href="/#contact" className={`button ${styles.navButton}`} onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
}
