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
    "network": "polygon",
    "destination_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "idempotency_key": "txn_12345"
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
    network: 'polygon',
    destination_address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    idempotency_key: 'txn_12345'
  })
});

const data = await response.json();
console.log(data);`,
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
        'network': 'polygon',
        'destination_address': '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        'idempotency_key': 'txn_12345'
    }
)

data = response.json()
print(data)`,
      response: `{
  "id": "txn_abc123xyz",
  "status": "pending",
  "amount": 1000,
  "currency": "USD",
  "stablecoin": "USDC",
  "network": "polygon",
  "destination_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "rate_locked_until": "2025-01-15T10:32:45Z",
  "estimated_completion": "2025-01-15T10:35:00Z",
  "created_at": "2025-01-15T10:30:45Z"
}`
    },
    offramp: {
      curl: `curl -X POST https://api.hashpayremit.com/v1/transactions/offramp \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 500,
    "stablecoin": "USDC",
    "currency": "ETB",
    "network": "stellar",
    "bank_account": {
      "account_number": "1234567890",
      "bank_code": "CBE"
    },
    "idempotency_key": "txn_67890"
  }'`,
      node: `const response = await fetch('https://api.hashpayremit.com/v1/transactions/offramp', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 500,
    stablecoin: 'USDC',
    currency: 'ETB',
    network: 'stellar',
    bank_account: {
      account_number: '1234567890',
      bank_code: 'CBE'
    },
    idempotency_key: 'txn_67890'
  })
});

const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.post(
    'https://api.hashpayremit.com/v1/transactions/offramp',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'amount': 500,
        'stablecoin': 'USDC',
        'currency': 'ETB',
        'network': 'stellar',
        'bank_account': {
            'account_number': '1234567890',
            'bank_code': 'CBE'
        },
        'idempotency_key': 'txn_67890'
    }
)

data = response.json()
print(data)`,
      response: `{
  "id": "txn_def456uvw",
  "status": "processing",
  "amount": 500,
  "stablecoin": "USDC",
  "currency": "ETB",
  "fiat_amount": 28500.00,
  "exchange_rate": 57.00,
  "network": "stellar",
  "bank_account": {
    "account_number": "****7890",
    "bank_code": "CBE"
  },
  "estimated_arrival": "2025-01-15T11:00:00Z",
  "created_at": "2025-01-15T10:35:12Z"
}`
    },
    quotes: {
      curl: `curl -X GET "https://api.hashpayremit.com/v1/quotes?from=USD&to=USDC&amount=1000" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
      node: `const params = new URLSearchParams({
  from: 'USD',
  to: 'USDC',
  amount: '1000'
});

const response = await fetch(\`https://api.hashpayremit.com/v1/quotes?\${params}\`, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const quote = await response.json();
console.log(quote);`,
      python: `import requests

params = {
    'from': 'USD',
    'to': 'USDC',
    'amount': 1000
}

response = requests.get(
    'https://api.hashpayremit.com/v1/quotes',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    params=params
)

quote = response.json()
print(quote)`,
      response: `{
  "quote_id": "qt_789xyz",
  "from_currency": "USD",
  "to_currency": "USDC",
  "amount": 1000,
  "exchange_rate": 0.9985,
  "you_receive": 998.50,
  "fees": {
    "network_fee": 0.50,
    "service_fee": 1.00
  },
  "expires_at": "2025-01-15T10:42:30Z",
  "created_at": "2025-01-15T10:40:30Z"
}`
    },
    rateLock: {
      curl: `curl -X POST https://api.hashpayremit.com/v1/rate-locks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "quote_id": "qt_789xyz",
    "lock_duration": 120
  }'`,
      node: `const response = await fetch('https://api.hashpayremit.com/v1/rate-locks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    quote_id: 'qt_789xyz',
    lock_duration: 120
  })
});

const lock = await response.json();
console.log(lock);`,
      python: `import requests

response = requests.post(
    'https://api.hashpayremit.com/v1/rate-locks',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'quote_id': 'qt_789xyz',
        'lock_duration': 120
    }
)

lock = response.json()
print(lock)`,
      response: `{
  "lock_id": "lock_abc123",
  "quote_id": "qt_789xyz",
  "exchange_rate": 0.9985,
  "locked_until": "2025-01-15T10:44:30Z",
  "status": "active",
  "created_at": "2025-01-15T10:42:30Z"
}`
    }
  };
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-yellow-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-mono text-primary font-semibold">API Sandbox Available</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground px-4">
              HashPay Developer Portal
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto px-4">
              Integrate with Africa&apos;s licensed stablecoin FX infrastructure.
              REST APIs, webhooks, and real-time settlement endpoints for on-ramp,
              off-ramp, and custody operations.
            </p>

            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-6 w-full sm:w-auto mx-4 sm:mx-0">
              Request Early API Access
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Developer Portal Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0 lg:sticky lg:top-24 h-fit">
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

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2 flex items-center text-foreground">
                      <Clock className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                      Full API Docs - Q1 2026
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Complete API documentation with interactive examples, SDKs for multiple languages,
                      and comprehensive integration guides launching Q1 2026.
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

                  <div className="bg-muted/30 border border-border rounded-xl p-6 font-mono text-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-foreground">Example Request Header</span>
                      <button onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY", "auth")} className="text-primary hover:text-primary/80 transition-colors">
                        {copiedCode === "auth" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <code className="text-foreground">Authorization: Bearer YOUR_API_KEY</code>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2 flex items-center text-foreground">
                      <Clock className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                      Coming Soon - Q1 2026
                    </h3>
                    <p className="text-muted-foreground font-body">
                      OAuth 2.0 authentication with automatic token refresh and full API key management portal.
                    </p>
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
                  <div className="space-y-6 border border-border rounded-xl p-6 bg-card">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded font-mono text-sm font-semibold">
                          POST
                        </span>
                        <code className="font-mono text-lg text-foreground">/v1/transactions/onramp</code>
                      </div>
                      <p className="text-muted-foreground font-body">
                        Convert fiat currency to stablecoins with instant settlement.
                      </p>
                    </div>

                    <Tabs defaultValue="curl" className="w-full">
                      <TabsList>
                        <TabsTrigger value="curl">cURL</TabsTrigger>
                        <TabsTrigger value="node">Node.js</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                      </TabsList>

                      {Object.entries(codeExamples.onramp).map(([lang, code]) => <TabsContent key={lang} value={lang}>
                          <div className="relative syntax-highlight">
                            <button onClick={() => copyToClipboard(code, `onramp-${lang}`)} className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded transition-colors">
                              {copiedCode === `onramp-${lang}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                            </button>
                            <pre className="overflow-x-auto code-block">
                              <code className="text-foreground">{code}</code>
                            </pre>
                          </div>
                        </TabsContent>)}
                    </Tabs>
                  </div>

                  {/* Off-Ramp Endpoint */}
                  <div className="space-y-6 border border-border rounded-xl p-6 bg-card">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded font-mono text-sm font-semibold">
                          POST
                        </span>
                        <code className="font-mono text-lg text-foreground">/v1/transactions/offramp</code>
                      </div>
                      <p className="text-muted-foreground font-body">
                        Convert stablecoins to fiat currency with bank settlement.
                      </p>
                    </div>

                    <Tabs defaultValue="curl" className="w-full">
                      <TabsList>
                        <TabsTrigger value="curl">cURL</TabsTrigger>
                        <TabsTrigger value="node">Node.js</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                      </TabsList>

                      {Object.entries(codeExamples.offramp).map(([lang, code]) => <TabsContent key={lang} value={lang}>
                          <div className="relative syntax-highlight">
                            <button onClick={() => copyToClipboard(code, `offramp-${lang}`)} className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded transition-colors">
                              {copiedCode === `offramp-${lang}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                            </button>
                            <pre className="overflow-x-auto code-block">
                              <code className="text-foreground">{code}</code>
                            </pre>
                          </div>
                        </TabsContent>)}
                    </Tabs>
                  </div>

                  {/* Get Quotes Endpoint */}
                  <div className="space-y-6 border border-border rounded-xl p-6 bg-card">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded font-mono text-sm font-semibold">
                          GET
                        </span>
                        <code className="font-mono text-lg text-foreground">/v1/quotes</code>
                      </div>
                      <p className="text-muted-foreground font-body">
                        Get real-time FX quotes for currency pairs.
                      </p>
                    </div>

                    <Tabs defaultValue="curl" className="w-full">
                      <TabsList>
                        <TabsTrigger value="curl">cURL</TabsTrigger>
                        <TabsTrigger value="node">Node.js</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                      </TabsList>

                      {Object.entries(codeExamples.quotes).map(([lang, code]) => <TabsContent key={lang} value={lang}>
                          <div className="relative syntax-highlight">
                            <button onClick={() => copyToClipboard(code, `quotes-${lang}`)} className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded transition-colors">
                              {copiedCode === `quotes-${lang}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                            </button>
                            <pre className="overflow-x-auto code-block">
                              <code className="text-foreground">{code}</code>
                            </pre>
                          </div>
                        </TabsContent>)}
                    </Tabs>
                  </div>

                  {/* Rate Lock Endpoint */}
                  <div className="space-y-6 border border-border rounded-xl p-6 bg-card">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded font-mono text-sm font-semibold">
                          POST
                        </span>
                        <code className="font-mono text-lg text-foreground">/v1/rate-locks</code>
                      </div>
                      <p className="text-muted-foreground font-body">
                        Lock exchange rates for 120 seconds to guarantee pricing.
                      </p>
                    </div>

                    <Tabs defaultValue="curl" className="w-full">
                      <TabsList>
                        <TabsTrigger value="curl">cURL</TabsTrigger>
                        <TabsTrigger value="node">Node.js</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                      </TabsList>

                      {Object.entries(codeExamples.rateLock).map(([lang, code]) => <TabsContent key={lang} value={lang}>
                          <div className="relative syntax-highlight">
                            <button onClick={() => copyToClipboard(code, `ratelock-${lang}`)} className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded transition-colors">
                              {copiedCode === `ratelock-${lang}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                            </button>
                            <pre className="overflow-x-auto code-block">
                              <code className="text-foreground">{code}</code>
                            </pre>
                          </div>
                        </TabsContent>)}
                    </Tabs>
                  </div>

                  {/* Additional Endpoint - Get Transaction */}
                  <div className="p-6 border border-border rounded-xl bg-card">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded font-mono text-sm font-semibold">
                        GET
                      </span>
                      <code className="font-mono text-foreground">/v1/transactions/{'{id}'}</code>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">
                      Retrieve transaction status and details by transaction ID.
                    </p>
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
                    event: "TRANSACTION_CREATED",
                    desc: "New transaction initiated"
                  }, {
                    event: "RATE_LOCKED",
                    desc: "FX rate locked for transaction"
                  }, {
                    event: "SETTLED",
                    desc: "Transaction successfully settled"
                  }, {
                    event: "FAILED",
                    desc: "Transaction failed or rejected"
                  }].map((webhook, idx) => <div key={idx} className="p-4 border border-border rounded-lg bg-card">
                          <code className="font-mono text-primary">{webhook.event}</code>
                          <p className="text-sm text-muted-foreground font-body mt-2">{webhook.desc}</p>
                        </div>)}
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2 flex items-center text-foreground">
                      <Clock className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                      Coming Soon - Q1 2026
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Webhook management portal with real-time event logs, retry configuration, and signature verification.
                    </p>
                  </div>
                </motion.div>}

              {/* Request API Access CTA */}
              <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl text-center">
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">Ready to Get Started?</h3>
                <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
                  Request early access to HashPay&apos;s API and start building compliant
                  stablecoin infrastructure today. Contact{' '}
                  <a href="mailto:developers@hashpayremit.com" className="text-primary hover:underline font-semibold">
                    developers@hashpayremit.com
                  </a>
                </p>
                <Link to="/contact">
                  <Button size="lg" className="text-lg px-8">
                    Request Early API Access
                  </Button>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Developers;