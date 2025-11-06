import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Key, Webhook, Clock, BookOpen, ChevronRight, Copy, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Developers = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const sidebarItems = [{
    id: "overview",
    label: "Overview",
    icon: BookOpen
  }, {
    id: "authentication",
    label: "Authentication",
    icon: Key
  }, {
    id: "endpoints",
    label: "Endpoints",
    icon: Code2
  }, {
    id: "webhooks",
    label: "Webhooks",
    icon: Webhook
  }, {
    id: "changelog",
    label: "Changelog",
    icon: Clock,
    comingSoon: true
  }];
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };
  const codeExamples = {
    onramp: {
      curl: `curl -X POST https://api.hashpayremit.com/v1/transactions/onramp \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "stablecoin": "USDC",
    "destination_address": "0x..."
  }'`,
      node: `const response = await fetch('https://api.hashpayremit.com/v1/transactions/onramp', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 1000,
    currency: 'USD',
    stablecoin: 'USDC',
    destination_address: '0x...'
  })
});

const data = await response.json();`,
      python: `import requests

response = requests.post(
    'https://api.hashpayremit.com/v1/transactions/onramp',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'amount': 1000,
        'currency': 'USD',
        'stablecoin': 'USDC',
        'destination_address': '0x...'
    }
)

data = response.json()`
    }
  };
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto text-center space-y-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">API Sandbox Available</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-heading font-bold">
              HashPay Developer Portal
            </h1>

            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Integrate directly with Africa's first licensed stablecoin FX infrastructure.
              Explore REST APIs, webhooks, and real-time settlement endpoints for on-ramp,
              off-ramp, and custody operations.
            </p>

            <Button size="lg" className="text-lg px-8">
              Request Early API Access
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Developer Portal Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 max-w-7xl mx-auto">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-fit">
              <nav className="space-y-2">
                {sidebarItems.map(item => <button key={item.id} onClick={() => !item.comingSoon && setActiveSection(item.id)} disabled={item.comingSoon} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${activeSection === item.id ? "bg-primary text-primary-foreground font-medium" : item.comingSoon ? "text-muted-foreground cursor-not-allowed opacity-50" : "text-foreground hover:bg-secondary"}`}>
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-body">{item.label}</span>
                    </div>
                    {item.comingSoon && <span className="text-xs bg-muted px-2 py-1 rounded">Soon</span>}
                  </button>)}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-12">
              {/* Overview Section */}
              {activeSection === "overview" && <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-heading font-bold mb-4">Overview</h2>
                    <p className="text-lg text-muted-foreground font-body">
                      The HashPay API enables seamless integration with licensed stablecoin
                      infrastructure across Sub-Saharan Africa. Build compliant on-ramp and
                      off-ramp solutions with real-time FX conversion.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[{
                  icon: Code2,
                  title: "RESTful API",
                  desc: "Simple HTTP endpoints with JSON responses"
                }, {
                  icon: Key,
                  title: "OAuth 2.0",
                  desc: "Secure authentication and authorization"
                }, {
                  icon: Webhook,
                  title: "Real-time Webhooks",
                  desc: "Instant notifications for transaction events"
                }, {
                  icon: Clock,
                  title: "T+0 Settlement",
                  desc: "Same-day settlement and confirmation"
                }].map((feature, idx) => <div key={idx} className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-all">
                        <feature.icon className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground font-body">{feature.desc}</p>
                      </div>)}
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Coming Q1 2026
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Full API documentation with interactive examples, SDKs for multiple languages,
                      and comprehensive integration guides.
                    </p>
                  </div>
                </motion.div>}

              {/* Authentication Section */}
              {activeSection === "authentication" && <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-heading font-bold mb-4">Authentication</h2>
                    <p className="text-lg text-muted-foreground font-body">
                      HashPay uses OAuth 2.0 for secure API authentication. All requests must
                      include a valid Bearer token in the Authorization header.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold">Getting Your API Key</h3>
                    <ol className="space-y-3 text-muted-foreground font-body list-decimal list-inside">
                      <li>Contact our sales team to request API access</li>
                      <li>Complete KYB verification and compliance onboarding</li>
                      <li>Receive your API credentials via secure channel</li>
                      <li>Test in sandbox environment before going live</li>
                    </ol>
                  </div>

                  <div className="bg-charcoal text-white rounded-xl p-6 font-mono text-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Example Request Header</span>
                      <button onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY", "auth")} className="text-primary hover:text-primary/80 transition-colors">
                        {copiedCode === "auth" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <code>Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </motion.div>}

              {/* Endpoints Section */}
              {activeSection === "endpoints" && <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-heading font-bold mb-4">API Endpoints</h2>
                    <p className="text-lg text-muted-foreground font-body mb-8">
                      Core endpoints for managing stablecoin transactions and settlements.
                    </p>
                  </div>

                  {/* On-Ramp Endpoint */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded font-mono text-sm font-semibold">
                        POST
                      </span>
                      <code className="font-mono text-lg">/v1/transactions/onramp</code>
                    </div>
                    <p className="text-muted-foreground font-body">
                      Convert fiat currency to stablecoins with instant settlement.
                    </p>

                    <Tabs defaultValue="curl" className="w-full">
                      <TabsList>
                        <TabsTrigger value="curl">cURL</TabsTrigger>
                        <TabsTrigger value="node">Node.js</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                      </TabsList>

                      {Object.entries(codeExamples.onramp).map(([lang, code]) => <TabsContent key={lang} value={lang}>
                          <div className="relative bg-charcoal text-white rounded-xl p-6 font-mono text-sm">
                            <button onClick={() => copyToClipboard(code, `onramp-${lang}`)} className="absolute top-4 right-4 text-primary hover:text-primary/80 transition-colors">
                              {copiedCode === `onramp-${lang}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <pre className="overflow-x-auto">
                              <code>{code}</code>
                            </pre>
                          </div>
                        </TabsContent>)}
                    </Tabs>
                  </div>

                  {/* Additional Endpoints */}
                  <div className="space-y-4">
                    {[{
                  method: "POST",
                  endpoint: "/v1/transactions/offramp",
                  desc: "Convert stablecoins to fiat currency"
                }, {
                  method: "GET",
                  endpoint: "/v1/quotes",
                  desc: "Get real-time FX quotes"
                }, {
                  method: "POST",
                  endpoint: "/v1/rate-locks",
                  desc: "Lock exchange rates for 120 seconds"
                }, {
                  method: "GET",
                  endpoint: "/v1/transactions/{id}",
                  desc: "Retrieve transaction status"
                }].map((endpoint, idx) => <div key={idx} className="p-4 border border-border rounded-lg bg-card">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 rounded font-mono text-sm font-semibold ${endpoint.method === "POST" ? "bg-green-500/10 text-green-600" : "bg-blue-500/10 text-blue-600"}`}>
                            {endpoint.method}
                          </span>
                          <code className="font-mono">{endpoint.endpoint}</code>
                        </div>
                        <p className="text-sm text-muted-foreground font-body ml-16">{endpoint.desc}</p>
                      </div>)}
                  </div>
                </motion.div>}

              {/* Webhooks Section */}
              {activeSection === "webhooks" && <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-heading font-bold mb-4">Webhooks</h2>
                    <p className="text-lg text-muted-foreground font-body">
                      Receive real-time notifications about transaction events, settlement
                      confirmations, and system updates.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold">Event Types</h3>
                    <div className="grid gap-4">
                      {[{
                    event: "transaction.created",
                    desc: "New transaction initiated"
                  }, {
                    event: "transaction.completed",
                    desc: "Transaction successfully settled"
                  }, {
                    event: "transaction.failed",
                    desc: "Transaction failed or rejected"
                  }, {
                    event: "rate.locked",
                    desc: "FX rate locked for transaction"
                  }, {
                    event: "custody.deposit",
                    desc: "Funds deposited to custody wallet"
                  }].map((webhook, idx) => <div key={idx} className="p-4 border border-border rounded-lg bg-card">
                          <code className="font-mono text-primary">{webhook.event}</code>
                          <p className="text-sm text-muted-foreground font-body mt-2">{webhook.desc}</p>
                        </div>)}
                    </div>
                  </div>
                </motion.div>}

              {/* Request API Access CTA */}
              <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground font-body mb-6">
                  Request early access to HashPay's API and start building compliant
                  stablecoin infrastructure today.
                </p>
                <Button size="lg" className="text-lg px-8">
                  Request API Access
                </Button>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Developers;