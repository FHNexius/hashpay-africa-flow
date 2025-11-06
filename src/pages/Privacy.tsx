import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              HashPay LLC collects information necessary to provide licensed stablecoin FX infrastructure services, 
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Identity verification information (KYC/KYB)</li>
              <li>Transaction and payment data</li>
              <li>Account and wallet information</li>
              <li>Communication records</li>
              <li>Technical and usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process transactions and provide services</li>
              <li>Comply with regulatory requirements (AML/CFT, OFAC)</li>
              <li>Prevent fraud and maintain security</li>
              <li>Improve our platform and services</li>
              <li>Communicate important updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Security</h2>
            <p className="text-muted-foreground">
              We implement bank-grade security measures including TLS 1.3 encryption, AES-256 encryption at rest, 
              multi-factor authentication, and regular security audits. All data is stored in compliance with 
              applicable regulations and retained for the legally required period (minimum 7 years).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Regulatory authorities and law enforcement (when required by law)</li>
              <li>Service providers (Fireblocks, Chainalysis, Sumsub, ComplyAdvantage)</li>
              <li>Banking partners (for transaction processing)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We never sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or request deletion of your personal data, 
              subject to regulatory retention requirements. Contact us at admin@hashpayremit.com 
              to exercise your rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use essential cookies for platform functionality and analytics cookies to improve 
              our services. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. International Transfers</h2>
            <p className="text-muted-foreground">
              Data may be transferred internationally for processing. We ensure adequate safeguards 
              are in place for cross-border data transfers in compliance with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. Continued use of our services 
              constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact Us</h2>
            <p className="text-muted-foreground">
              For privacy-related questions or concerns, contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>HashPay LLC</strong><br />
              Email: admin@hashpayremit.com<br />
              Location: Addis Ababa, Ethiopia
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
