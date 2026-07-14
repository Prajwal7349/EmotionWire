'use client';

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const COUNTRY_CODES = [
  { code: '+1', name: 'United States', minLength: 10, maxLength: 10 },
  { code: '+1', name: 'Canada', minLength: 10, maxLength: 10 },
  { code: '+44', name: 'United Kingdom', minLength: 10, maxLength: 11 },
  { code: '+61', name: 'Australia', minLength: 9, maxLength: 9 },
  { code: '+91', name: 'India', minLength: 10, maxLength: 10 },
  { code: '+49', name: 'Germany', minLength: 10, maxLength: 11 },
  { code: '+33', name: 'France', minLength: 9, maxLength: 9 },
  { code: '+81', name: 'Japan', minLength: 10, maxLength: 10 },
  { code: '+86', name: 'China', minLength: 11, maxLength: 11 },
  { code: '+971', name: 'United Arab Emirates', minLength: 9, maxLength: 9 },
  { code: '+65', name: 'Singapore', minLength: 8, maxLength: 8 },
  { code: '+353', name: 'Ireland', minLength: 7, maxLength: 9 },
  { code: '+31', name: 'Netherlands', minLength: 9, maxLength: 9 },
  { code: '+46', name: 'Sweden', minLength: 7, maxLength: 9 },
  { code: '+41', name: 'Switzerland', minLength: 9, maxLength: 9 },
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

  useEffect(() => {
    // Auto-detect the user's country code based on their IP address
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_calling_code) {
          // Verify if we have this country code in our predefined list
          const exists = COUNTRY_CODES.find(c => c.code === data.country_calling_code);
          if (exists) {
            setFormData(prev => ({ ...prev, countryCode: data.country_calling_code }));
          }
        }
      })
      .catch(err => {
        console.error('Failed to auto-detect country code:', err);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
      // Strip out anything that is not a digit
      const onlyDigits = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyDigits }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Find validation rules for current country code
  const currentCountryConfig = COUNTRY_CODES.find(c => c.code === formData.countryCode) || { minLength: 7, maxLength: 15 };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Use the exact Formspree endpoint provided
    const formspreeEndpoint = 'https://formspree.io/f/xojgvnzo';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
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
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
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
                Thank you for reaching out! We&apos;ll get back to you shortly.
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
                      placeholder="5550123"
                      className={styles.phoneInput}
                      minLength={currentCountryConfig.minLength}
                      maxLength={currentCountryConfig.maxLength}
                      pattern="[0-9]*"
                      title={`Please enter ${currentCountryConfig.minLength === currentCountryConfig.maxLength ? 'exactly ' + currentCountryConfig.maxLength : 'between ' + currentCountryConfig.minLength + ' and ' + currentCountryConfig.maxLength} digits`}
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
