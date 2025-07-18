import React from 'react';
// import Banner from '@/components/common/Banner';

export default function CookiesInfo() {
  return (
    <div>
      {/* Hero Banner */}
      {/* <Banner
        type="inner"
        title="Cookie Policy"
        subtitle="Cookie Information"
        description="Learn about how we use cookies to enhance your experience on our website."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Cookie Policy', href: '/cookies' }
        ]}
      /> */}

      {/* Cookie Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-sm text-gray-500 mb-8">
              Last Updated: January 1, 2024
            </div>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their site.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              TechStartup uses cookies to enhance your experience on our website, analyze site traffic, and improve our services. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).
            </p>

            <h2>Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. Without these cookies, some features of our website may not work correctly.
            </p>
            <ul>
              <li>Authentication and security cookies</li>
              <li>Session management cookies</li>
              <li>Load balancing cookies</li>
            </ul>

            <h3>Performance Cookies</h3>
            <p>
              These cookies collect information about how you use our website, such as which pages you visit and how long you spend on each page. This information helps us improve our website's performance and user experience.
            </p>
            <ul>
              <li>Google Analytics cookies</li>
              <li>Site performance monitoring cookies</li>
              <li>Error tracking cookies</li>
            </ul>

            <h3>Functional Cookies</h3>
            <p>
              These cookies remember your preferences and choices to provide a more personalized experience. They may also be used to provide services you have requested.
            </p>
            <ul>
              <li>Language preference cookies</li>
              <li>Theme and display preference cookies</li>
              <li>Remember login information cookies</li>
            </ul>

            <h3>Marketing Cookies</h3>
            <p>
              These cookies are used to track visitors across websites and are used to display relevant advertisements. They may also be used to limit the number of times you see an advertisement.
            </p>
            <ul>
              <li>Advertising platform cookies</li>
              <li>Social media integration cookies</li>
              <li>Remarketing cookies</li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>
              We may use third-party services that place cookies on your device. These include:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Used to analyze website traffic and user behavior</li>
              <li><strong>Social Media Platforms:</strong> Used for social media integration and sharing</li>
              <li><strong>Customer Support Tools:</strong> Used to provide customer support chat functionality</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways:
            </p>

            <h3>Browser Settings</h3>
            <p>
              Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. You can also delete cookies that have already been set.
            </p>

            <h3>Opt-Out Tools</h3>
            <p>
              You can opt out of certain advertising cookies by visiting:
            </p>
            <ul>
              <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices/</a></li>
              <li>Digital Advertising Alliance: <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices/</a></li>
            </ul>

            <h2>Cookie Consent</h2>
            <p>
              When you first visit our website, you will see a cookie consent notice. By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us.
            </p>

            <h2>Impact of Disabling Cookies</h2>
            <p>
              If you choose to disable cookies, some features of our website may not function properly. This could include:
            </p>
            <ul>
              <li>Difficulty logging in or staying logged in</li>
              <li>Loss of personalized settings</li>
              <li>Reduced website functionality</li>
              <li>Inability to use certain features</li>
            </ul>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by posting the updated policy on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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