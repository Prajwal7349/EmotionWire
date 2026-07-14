'use client';

import React, { useState, useEffect } from 'react';
import { AsYouType, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import styles from './Footer.module.css';

const COUNTRY_CODES: { code: string, iso: CountryCode, name: string, placeholder: string, maxDigits: number }[] = [
  { code: '+1', iso: 'US', name: 'United States', placeholder: '5551234567', maxDigits: 10 },
  { code: '+1', iso: 'CA', name: 'Canada', placeholder: '5551234567', maxDigits: 10 },
  { code: '+44', iso: 'GB', name: 'United Kingdom', placeholder: '7911123456', maxDigits: 11 },
  { code: '+61', iso: 'AU', name: 'Australia', placeholder: '412345678', maxDigits: 9 },
  { code: '+91', iso: 'IN', name: 'India', placeholder: '9876543210', maxDigits: 10 },
  { code: '+49', iso: 'DE', name: 'Germany', placeholder: '1512345678', maxDigits: 11 },
  { code: '+33', iso: 'FR', name: 'France', placeholder: '612345678', maxDigits: 9 },
  { code: '+81', iso: 'JP', name: 'Japan', placeholder: '9012345678', maxDigits: 10 },
  { code: '+86', iso: 'CN', name: 'China', placeholder: '13123456789', maxDigits: 11 },
  { code: '+971', iso: 'AE', name: 'United Arab Emirates', placeholder: '501234567', maxDigits: 9 },
  { code: '+65', iso: 'SG', name: 'Singapore', placeholder: '91234567', maxDigits: 8 },
  { code: '+353', iso: 'IE', name: 'Ireland', placeholder: '851234567', maxDigits: 9 },
  { code: '+31', iso: 'NL', name: 'Netherlands', placeholder: '612345678', maxDigits: 9 },
  { code: '+46', iso: 'SE', name: 'Sweden', placeholder: '701234567', maxDigits: 9 },
  { code: '+41', iso: 'CH', name: 'Switzerland', placeholder: '791234567', maxDigits: 9 },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    countryIso: 'US' as CountryCode,
    phoneNumber: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    // Auto-detect the user's country based on their IP address
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          // Verify if we have this country code in our predefined list
          const exists = COUNTRY_CODES.find(c => c.iso === data.country_code);
          if (exists) {
            setFormData(prev => ({ ...prev, countryIso: data.country_code as CountryCode }));
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
      const currentCountryConfig = COUNTRY_CODES.find(c => c.iso === formData.countryIso) || COUNTRY_CODES[0];
      const rawDigits = value.replace(/\D/g, '');
      
      // Block typing if it exceeds the max allowed digits for this country
      if (rawDigits.length > currentCountryConfig.maxDigits) {
        return;
      }

      // Format phone number as they type using libphonenumber-js
      const formatter = new AsYouType(formData.countryIso);
      const formatted = formatter.input(value);
      setFormData(prev => ({ ...prev, [name]: formatted }));
      
      // Clear error as they type
      if (phoneError) setPhoneError(false);
    } else if (name === 'countryIso') {
      // If country changes, re-format the existing phone number for the new country
      const formatter = new AsYouType(value as CountryCode);
      // Strip formatting first to get pure digits before re-formatting
      const rawDigits = formData.phoneNumber.replace(/\D/g, '');
      const formatted = formatter.input(rawDigits);
      
      setFormData(prev => ({ 
        ...prev, 
        countryIso: value as CountryCode,
        phoneNumber: formatted 
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const currentCountryConfig = COUNTRY_CODES.find(c => c.iso === formData.countryIso) || COUNTRY_CODES[0];
  
  // Format the placeholder so it shows up perfectly masked (e.g. "(555) 123-4567")
  const formattedPlaceholder = new AsYouType(formData.countryIso).input(currentCountryConfig.placeholder);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number strictly before submission
    if (!isValidPhoneNumber(formData.phoneNumber, formData.countryIso)) {
      setPhoneError(true);
      return;
    }
    
    setStatus('loading');
    
    // Use the exact Formspree endpoint provided
    const formspreeEndpoint = 'https://formspree.io/f/xojgvnzo';

    try {
      // We submit the actual dial code (+1) instead of ISO code (US) for the backend data
      const submissionData = {
        ...formData,
        countryCode: currentCountryConfig.code,
      };

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          countryIso: 'US',
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
              <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
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
                      name="countryIso" 
                      id="countryIso" 
                      value={formData.countryIso}
                      onChange={handleChange}
                      className={styles.countrySelect}
                    >
                      {COUNTRY_CODES.map((country, idx) => (
                        <option key={idx} value={country.iso}>
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
                      placeholder={formattedPlaceholder}
                      className={styles.phoneInput}
                      style={phoneError ? { borderColor: '#e74c3c' } : {}}
                    />
                  </div>
                  {phoneError && (
                    <span style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '-0.5rem' }}>
                      Please enter a valid phone number for {currentCountryConfig.name}.
                    </span>
                  )}
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
