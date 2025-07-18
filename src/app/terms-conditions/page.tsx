import React from 'react';
// import Banner from '@/components/common/Banner';

export default function TermsConditions() {
  return (
    <div>
      {/* Hero Banner */}
      {/* <Banner
        type="inner"
        title="Terms & Conditions"
        subtitle="Service Agreement"
        description="Please read these terms carefully before using our services."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Terms & Conditions', href: '/terms-conditions' }
        ]}
      /> */}

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-sm text-gray-500 mb-8">
              Last Updated: January 1, 2024
            </div>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using TechStartup's services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              TechStartup provides financial technology solutions including document verification, fraud detection, AML compliance, and API services to financial institutions and businesses.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our services, you may need to create an account. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Providing accurate and complete information</li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:</p>
            <ul>
              <li>Use the services for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the services or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses or malicious code</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by TechStartup and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
            </p>

            <h2>6. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information.
            </p>

            <h2>7. Payment and Billing</h2>
            <p>
              For paid services, you agree to pay all fees and charges associated with your account. Payment terms are specified in your service agreement. We reserve the right to suspend services for non-payment.
            </p>

            <h2>8. Service Availability</h2>
            <p>
              We strive to maintain high service availability but cannot guarantee uninterrupted service. We reserve the right to modify, suspend, or discontinue services at any time with reasonable notice.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TechStartup shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless TechStartup from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes will be resolved in the courts of San Francisco, California.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on our website. Your continued use of our services constitutes acceptance of the modified Terms.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul>
              <li>Email: legal@techstartup.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street, Innovation District, San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}