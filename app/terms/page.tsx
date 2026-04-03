import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - MyPR",
  description: "MyPR terms of service — rules and guidelines for using the platform.",
};

export default function TermsPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="legal-page">
        <nav className="legal-nav">
          <a href="/" className="legal-logo"><div className="legal-logo-icon">M</div>MyPR</a>
        </nav>

        <article className="legal-content">
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: April 3, 2026</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the MyPR mobile application and website (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use the Service.</p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>MyPR is a platform that connects content creators with brands and agencies for user-generated content (UGC) opportunities, PR experiences, and sponsored partnerships. The Service includes:</p>
            <ul>
              <li>A marketplace for UGC briefs and brand collaborations</li>
              <li>Tools for content submission and approval workflows</li>
              <li>Payment processing for completed work</li>
              <li>Creator profile management and portfolio building</li>
              <li>Compliance verification for regulated markets (UAE, KSA)</li>
            </ul>
          </section>

          <section>
            <h2>3. Account Registration</h2>
            <p>To use certain features of the Service, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p>You must be at least 18 years old to create an account. We reserve the right to suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section>
            <h2>4. User Roles</h2>
            <h3>Creators</h3>
            <p>As a creator, you may browse available briefs, apply for opportunities, submit content, and receive payment for approved work. You are responsible for ensuring your content meets brief requirements and complies with applicable advertising regulations.</p>

            <h3>Brands</h3>
            <p>As a brand, you may post briefs, review creator applications, approve or request revisions on submissions, and process payments for completed work. You are responsible for clearly communicating brief requirements and providing timely feedback.</p>

            <h3>Agencies</h3>
            <p>As an agency, you may manage a roster of creators, negotiate deals on their behalf, and access performance analytics. You are responsible for ensuring proper authorization from creators you represent.</p>
          </section>

          <section>
            <h2>5. Content and Intellectual Property</h2>
            <p>You retain ownership of content you create and upload to the Service. By submitting content for a brief, you grant the brand the usage rights specified in that brief (e.g., full buyout, licensed for a specific period).</p>
            <p>You agree not to upload content that:</p>
            <ul>
              <li>Infringes on any third party&rsquo;s intellectual property rights</li>
              <li>Contains unlawful, defamatory, or objectionable material</li>
              <li>Violates any applicable advertising or disclosure regulations</li>
              <li>Misrepresents your identity or affiliation</li>
            </ul>
          </section>

          <section>
            <h2>6. Payments</h2>
            <p>Payment amounts are set by brands in their briefs. MyPR facilitates payments between brands and creators but is not a party to the underlying agreement between them.</p>
            <ul>
              <li>Payments are processed manually within 3-5 business days after content approval</li>
              <li>Creators are responsible for providing accurate payment details (bank account, Zena ID)</li>
              <li>All amounts are displayed in the currency specified (typically AED)</li>
              <li>You are responsible for any taxes applicable to payments you receive</li>
            </ul>
          </section>

          <section>
            <h2>7. Compliance</h2>
            <p>Users operating in regulated markets (including but not limited to UAE and KSA) must comply with all applicable advertising, media, and content creation regulations. This includes:</p>
            <ul>
              <li>Maintaining valid licenses where required (e.g., UAE NMA permits, KSA Mawthooq)</li>
              <li>Including proper disclosure tags (#Ad, #Sponsored) as required by law</li>
              <li>Complying with content guidelines specific to your market</li>
            </ul>
            <p>MyPR provides compliance verification tools but does not guarantee regulatory compliance. Users are ultimately responsible for their own compliance.</p>
          </section>

          <section>
            <h2>8. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Circumvent the platform to negotiate deals directly (off-platform solicitation)</li>
              <li>Submit fraudulent content or misrepresent engagement metrics</li>
              <li>Harass, threaten, or intimidate other users</li>
              <li>Attempt to access other users&rsquo; accounts or data</li>
              <li>Use automated tools to scrape or collect data from the Service</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
            </ul>
          </section>

          <section>
            <h2>9. Disclaimers</h2>
            <p>THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p>We do not guarantee that the Service will be uninterrupted, error-free, or secure. We do not guarantee the quality, accuracy, or reliability of any content or interactions on the platform.</p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYPR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.</p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the Service will immediately cease. Any pending payments for approved work will still be processed.</p>
          </section>

          <section>
            <h2>12. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting updated Terms on the Service and updating the &ldquo;Last updated&rdquo; date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.</p>
          </section>

          <section>
            <h2>13. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2>14. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>Email: legal@mypr.app</p>
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
