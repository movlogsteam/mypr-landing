import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MyPR",
  description: "MyPR privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="legal-page">
        <nav className="legal-nav">
          <a href="/" className="legal-logo"><div className="legal-logo-icon">M</div>MyPR</a>
        </nav>

        <article className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: April 3, 2026</p>

          <section>
            <h2>1. Introduction</h2>
            <p>MyPR Inc. (&ldquo;MyPR&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the MyPR mobile application and website (collectively, the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>When you register for an account, we may collect:</p>
            <ul>
              <li>Name and email address</li>
              <li>Phone number</li>
              <li>Social media handles and profile information</li>
              <li>Payment information (bank name, IBAN last 4 digits, payment provider IDs)</li>
              <li>Profile photos and content you upload</li>
              <li>Business license information (for compliance verification)</li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect certain information when you use the Service, including:</p>
            <ul>
              <li>Device information (type, operating system, unique identifiers)</li>
              <li>Log data (IP address, browser type, pages visited, time spent)</li>
              <li>Location data (with your permission, for location-based features)</li>
              <li>App usage patterns and feature interactions</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Process transactions and send related information</li>
              <li>Match creators with brand opportunities</li>
              <li>Verify identity and compliance with local regulations</li>
              <li>Send notifications about briefs, payments, and account activity</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Monitor and analyze usage trends to improve user experience</li>
              <li>Detect, prevent, and address fraud and security issues</li>
            </ul>
          </section>

          <section>
            <h2>4. Information Sharing</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>With brands and agencies:</strong> When you apply for briefs or participate in campaigns, relevant profile information is shared with the brand or agency.</li>
              <li><strong>Service providers:</strong> We may share information with third-party vendors who help us operate the Service (e.g., cloud hosting, analytics, payment processing).</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law, regulation, or legal process.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide the Service. We may also retain information as necessary to comply with legal obligations, resolve disputes, and enforce agreements.</p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us at privacy@mypr.app.</p>
          </section>

          <section>
            <h2>8. Third-Party Services</h2>
            <p>Our Service may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.</p>
            <p>We use Google OAuth for authentication. Google&rsquo;s use of your data is governed by Google&rsquo;s Privacy Policy.</p>
          </section>

          <section>
            <h2>9. Children&rsquo;s Privacy</h2>
            <p>The Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.</p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>Email: privacy@mypr.app</p>
          </section>
        </article>

        <footer className="legal-footer">
          <span>&copy; 2026 MyPR Inc.</span>
          <div className="legal-footer-links"><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div>
        </footer>
      </div>
    </>
  );
}

const styles = `
.legal-page { min-height: 100vh; background: #f8f0e3; color: #1A1A1A; }
.legal-nav { max-width: 800px; margin: 0 auto; padding: 24px 24px 0; }
.legal-logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 20px; color: #1A1A1A; text-decoration: none; }
.legal-logo-icon { width: 32px; height: 32px; background: #6B5B8A; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #FAF7F2; font-weight: 800; font-size: 16px; }
.legal-content { max-width: 800px; margin: 0 auto; padding: 48px 24px 80px; }
.legal-content h1 { font-size: 36px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px; font-family: Georgia, serif; }
.legal-updated { font-size: 14px; color: #8A8279; margin-bottom: 40px; }
.legal-content section { margin-bottom: 32px; }
.legal-content h2 { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #1A1A1A; font-family: Georgia, serif; }
.legal-content h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; margin-top: 16px; color: #1A1A1A; }
.legal-content p { font-size: 15px; line-height: 1.7; color: #1A1A1A; margin-bottom: 12px; }
.legal-content ul { margin: 8px 0 16px 24px; }
.legal-content li { font-size: 15px; line-height: 1.7; color: #1A1A1A; margin-bottom: 4px; }
.legal-footer { max-width: 800px; margin: 0 auto; padding: 24px; border-top: 1px solid #D5CFC5; color: #8A8279; font-size: 13px; display: flex; justify-content: space-between; }
.legal-footer-links { display: flex; gap: 24px; }
.legal-footer-links a { color: #8A8279; text-decoration: none; }
.legal-footer-links a:hover { color: #1A1A1A; }
`;
