import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
},[])
  return (
    <div className="privacy-policy-container">
      <div className="header">
        <h1>Privacy Policy for Indu enterprises</h1>
      </div>

      <div className="section">
        <h2>Introduction</h2>
        <p>
          Welcome to Indu enterprises. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
        </p>
      </div>

      <div className="section">
        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products, or otherwise when you contact us.
        </p>
      </div>

      <div className="section">
        <h2>How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
      </div>

      <div className="section">
        <h2>Sharing Your Information</h2>
        <p>
          We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, and Vital Interests.
        </p>
      </div>

      <div className="section">
        <h2>Security of Your Information</h2>
        <p>
          We aim to protect your personal information through a system of organizational and technical security measures.
        </p>
      </div>

      <div className="section">
        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us at support@Indu enterprises.com or by post to:
          <br />
          Indu enterprises
          <br />
          [Your Company Address]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
