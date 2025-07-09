import React from 'react';
import Banner from '@/components/common/Banner';

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Banner */}
      <Banner
        type="inner"
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="Learn how we collect, use, and protect your personal information."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy-policy' }
        ]}
      />

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-sm text-gray-500 mb-8">
              Last Updated: January 1, 2024
            </div>

            <h2>Introduction</h2>
            <p>
              At TechStartup ("we," "our," or "us"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company information and job title</li>
              <li>Account credentials and authentication information</li>
              <li>Communication preferences</li>
              <li>Financial and business information (for service provision)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>We automatically collect certain information when you visit our website:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing and maintaining our services</li>
              <li>Processing transactions and managing accounts</li>
              <li>Communicating with you about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
              <li>Detecting and preventing fraud</li>
              <li>Marketing and promotional activities (with your consent)</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication systems</li>
              <li>Employee training on data protection</li>
              <li>Compliance with industry security standards</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. For more information, please see our Cookie Policy.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Portability of your data</li>
              <li>Objection to processing</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@techstartup.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street, Innovation District, San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}