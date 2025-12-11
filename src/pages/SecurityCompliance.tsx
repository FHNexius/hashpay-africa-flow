import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, FileCheck, Database, Eye, CheckCircle2 } from "lucide-react";
const SecurityCompliance = () => {
  const sections = [{
    icon: Shield,
    title: "Security Practices",
    items: ["Industry-standard encryption", "Secure data transmission", "Access controls and authentication", "Regular security reviews", "Secure key management", "Data protection at rest", "Audit logging", "Monitoring and alerts"]
  }, {
    icon: FileCheck,
    title: "Compliance Approach",
    items: ["Working with U.S. regulatory advisors", "Collaborating with Ethiopian regulatory experts", "Building compliant pathways", "Partner verification processes", "Transaction monitoring", "Reporting capabilities", "Know Your Customer (KYC) support", "Know Your Business (KYB) support"]
  }, {
    icon: Database,
    title: "Auditability & Transparency",
    items: ["Complete transaction records", "Data retention policies", "Exportable reports", "Clear documentation", "Transaction history", "Reconciliation reports", "Compliance dashboards", "Status monitoring"]
  }, {
    icon: Lock,
    title: "Custody & Asset Security",
    items: ["Authorized custody partners", "Secure wallet management", "Multi-approval workflows", "Withdrawal controls", "Balance management", "Partner verification", "Secure asset storage", "Regular auditing"]
  }, {
    icon: Eye,
    title: "Transaction Monitoring",
    items: ["Transaction review", "Activity monitoring", "Volume tracking", "Pattern awareness", "Alert notifications", "Review processes", "Escalation procedures", "Case documentation"]
  }, {
    icon: CheckCircle2,
    title: "Reconciliation & Accuracy",
    items: ["Ledger matching", "Regular verification", "Automated validation", "Discrepancy detection", "Timely resolution", "Balance verification", "Settlement confirmation", "Audit trail maintenance"]
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Security & Compliance
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              We follow industry-standard security practices and work closely with 
              regulatory experts in both the U.S. and Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Badge */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 w-full md:w-auto">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-xl flex-shrink-0">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    U.S. Parent Company
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">HashPay LLC</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full md:w-auto">
                <div className="px-3 sm:px-4 py-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-lg font-medium text-xs sm:text-sm">
                  Building Compliance
                </div>
                <div className="px-3 sm:px-4 py-2 bg-green-500/10 text-green-700 dark:text-green-400 rounded-lg font-medium text-xs sm:text-sm">
                  USDC & USDT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {sections.map((section, index) => <div key={index} className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {section.items.map((item, idx) => <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* Regulatory Note */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Regulatory Approach
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              HashPay is actively building compliant pathways and working with regulatory advisors 
              in both the United States and Ethiopia. We are pursuing required approvals and 
              maintaining compliant relationships with authorized on-ramp and off-ramp service providers. 
              Our platform supports USDC (Circle) and USDT (Tether) for all FX and settlement operations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default SecurityCompliance;