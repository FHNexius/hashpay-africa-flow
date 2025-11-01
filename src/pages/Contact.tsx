import { useState } from "react";
import { Mail, MapPin, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassPanel from "@/components/GlassPanel";
import RippleButton from "@/components/RippleButton";
import ScrollReveal from "@/components/ScrollReveal";
import CurvedDivider from "@/components/CurvedDivider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "Thank you for contacting HashPay. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-40 pb-20 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl font-heading font-bold leading-tight">
              Let's Build{" "}
              <span className="text-gradient animate-gradient">Together</span>
            </h1>
            <p className="text-2xl text-foreground/90 font-body leading-relaxed">
              Connect with our team to discuss your infrastructure needs and explore how 
              HashPay can power your financial operations.
            </p>
          </motion.div>
        </div>
        <CurvedDivider />
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <ScrollReveal direction="left">
              <GlassPanel hover={false} className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-body font-medium">Full Name *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-background/50 border-border" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-body font-medium">Business Email *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background/50 border-border" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-body font-medium">Organization *</label>
                    <Input id="organization" name="organization" value={formData.organization} onChange={handleChange} required className="bg-background/50 border-border" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-body font-medium">Message *</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="bg-background/50 border-border min-h-[150px]" placeholder="Tell us about your infrastructure needs..." />
                  </div>
                  <RippleButton type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="w-4 h-4" />
                  </RippleButton>
                </form>
              </GlassPanel>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-heading font-bold mb-6">Get in Touch</h2>
                  <p className="text-lg text-foreground/90 font-body leading-relaxed">
                    Whether you're a fintech looking to integrate stablecoin rails, a bank exploring 
                    custody solutions, or an organization seeking compliant payment infrastructure — 
                    we're here to help.
                  </p>
                </div>

                <GlassPanel hover={false} className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-heading font-semibold">Email</h3>
                      <a href="mailto:admin@hashpayremit.com" className="text-muted-foreground hover:text-primary transition-colors font-body">
                        admin@hashpayremit.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-heading font-semibold">Office</h3>
                      <p className="text-muted-foreground font-body">Burnsville, MN<br />United States</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-heading font-semibold">Response Time</h3>
                      <p className="text-muted-foreground font-body">Within 24 hours</p>
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
