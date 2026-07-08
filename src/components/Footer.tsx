'use client';

import React, { useState } from 'react';
import styles from './Footer.module.css';

const COUNTRY_CODES = [
  { code: '+1', name: 'United States' },
  { code: '+1', name: 'Canada' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+61', name: 'Australia' },
  { code: '+91', name: 'India' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+81', name: 'Japan' },
  { code: '+86', name: 'China' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+65', name: 'Singapore' },
  { code: '+353', name: 'Ireland' },
  { code: '+31', name: 'Netherlands' },
  { code: '+46', name: 'Sweden' },
  { code: '+41', name: 'Switzerland' },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          countryCode: '+1',
          phoneNumber: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className={`${styles.footer} section`}>
      <div className="container">
        <div className={styles.footerLayout}>
          <div className={styles.footerContent}>
            <h2>Connect with us.</h2>
            <div className={styles.contactInfo}>
              <a href="mailto:amit.dangle@emotionwire.co" className={styles.largeLink}>
                amit.dangle@emotionwire.co
              </a>
              <br /><br />
              <a href="tel:+919822066269" className={styles.largeLink}>
                +91-9822066269
              </a>
            </div>
            <div className={styles.footerCopyright}>
              <p>Copyright © 2026 EmotionWire.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <h3>Send us a message</h3>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                Thank you for reaching out! We'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      required 
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      required 
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="companyName">Company Name</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    required 
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <div className={styles.phoneGroup}>
                    <select 
                      name="countryCode" 
                      id="countryCode" 
                      value={formData.countryCode}
                      onChange={handleChange}
                      className={styles.countrySelect}
                    >
                      {COUNTRY_CODES.map((country, idx) => (
                        <option key={idx} value={country.code}>
                          {country.name} ({country.code})
                        </option>
                      ))}
                    </select>
                    <input 
                      type="tel" 
                      id="phoneNumber" 
                      name="phoneNumber" 
                      required 
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="555-0123"
                      className={styles.phoneInput}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Submit'}
                </button>
                {status === 'error' && (
                  <p className={styles.errorMessage}>Failed to send message. Please try again later.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
