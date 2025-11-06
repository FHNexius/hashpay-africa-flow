import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using HashPay's services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, 
              you are prohibited from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Service Description</h2>
            <p className="text-muted-foreground">
              HashPay LLC operates a licensed stablecoin FX infrastructure platform providing on-ramp, 
              off-ramp, and custody services for stablecoins in Sub-Saharan Africa, starting with Ethiopia. 
              We are licensed as an FX Bureau by the National Bank of Ethiopia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Eligibility</h2>
            <p className="text-muted-foreground mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Be a legal entity or individual of legal age</li>
              <li>Complete KYC/KYB verification</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not be located in a restricted jurisdiction</li>
              <li>Not be on any sanctions lists (OFAC, UN, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Account Registration</h2>
            <p className="text-muted-foreground">
              You must provide accurate, current, and complete information during registration. 
              You are responsible for maintaining the security of your account credentials and 
              for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Transactions</h2>
            <p className="text-muted-foreground mb-4">
              All transactions are subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Verification and compliance checks</li>
              <li>FX rate locks (valid for 120 seconds)</li>
              <li>Transaction limits and fees as disclosed</li>
              <li>Settlement times (typically T+0)</li>
              <li>Our right to reject or reverse suspicious transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Fees and Pricing</h2>
            <p className="text-muted-foreground">
              Transaction fees and FX spreads are transparently disclosed before confirmation. 
              Fees may vary based on transaction size, corridor, and service level. We reserve 
              the right to modify fees with advance notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Compliance Obligations</h2>
            <p className="text-muted-foreground">
              You agree to comply with all AML/CFT regulations and provide requested documentation. 
              We reserve the right to suspend or terminate services for non-compliance. You must not 
              use our services for illegal activities including money laundering, terrorist financing, 
              or sanctions evasion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Custody Services</h2>
            <p className="text-muted-foreground">
              Custody services are provided through Fireblocks MPC infrastructure. While we implement 
              bank-grade security, you acknowledge the inherent risks of digital asset custody. 
              Insurance coverage details are available upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Limitations of Liability</h2>
            <p className="text-muted-foreground">
              HashPay is not liable for losses arising from: unauthorized access, market volatility, 
              third-party service failures, or force majeure events. Our maximum liability is limited 
              to the fees paid for the specific transaction in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Termination</h2>
            <p className="text-muted-foreground">
              We may suspend or terminate your access immediately for violations of these terms, 
              compliance concerns, or as required by law. You may close your account with advance 
              notice, subject to settlement of pending transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Dispute Resolution</h2>
            <p className="text-muted-foreground">
              Disputes shall be resolved through good faith negotiation. If unresolved, disputes 
              will be subject to arbitration under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">12. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Material changes will be 
              communicated with 30 days notice. Continued use constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, contact:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>HashPay LLC</strong><br />
              Email: admin@hashpayremit.com<br />
              Operating in Ethiopia & Sub-Saharan Africa
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
