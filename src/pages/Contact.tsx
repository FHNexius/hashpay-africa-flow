import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    useCase: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:admin@hashpayremit.com?subject=Contact from ${encodeURIComponent(formData.name)} - ${encodeURIComponent(formData.company)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nUse Case: ${formData.useCase}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with the message pre-filled.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to integrate HashPay's stablecoin infrastructure? 
              Let's discuss how we can support your use case.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                    Company *
                  </label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium mb-2 text-foreground">
                    Use Case *
                  </label>
                  <Input
                    id="useCase"
                    required
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    placeholder="e.g., Cross-border payments, Treasury management"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                      <p className="text-muted-foreground">admin@hashpayremit.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        For general inquiries and support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Location</h3>
                      <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Licensed FX Bureau in Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">24/7 Operations</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Always-on infrastructure support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Partnership Inquiries
                </h3>
                <p className="text-muted-foreground mb-4">
                  Interested in becoming a liquidity partner or integrating HashPay into your platform?
                </p>
                <Button variant="outline" className="w-full">
                  Schedule Partnership Call
                </Button>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Developer Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Technical questions about our API or integration support?
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = '/developers'}>
                  Visit Developer Portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
