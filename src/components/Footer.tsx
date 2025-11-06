import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import hashpayLogoLight from "@/assets/hashpay-logo.png";
import hashpayLogoDark from "@/assets/hashpay-logo-dark.png";

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      {/* Animated blue accent line */}
      <motion.div 
        className="absolute top-0 left-0 h-0.5 bg-gradient-primary" 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            className="space-y-6" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src={isDark ? hashpayLogoDark : hashpayLogoLight}
              alt="HashPay" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-32"
            />
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Licensed stablecoin infrastructure for Sub-Saharan Africa
            </p>
          </motion.div>

          {/* Company */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold mb-6 text-lg text-foreground">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "Platform", path: "/platform" },
                { name: "Solutions", path: "/solutions" },
                { name: "Security & Compliance", path: "/security-compliance" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body group"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold mb-6 text-lg text-foreground">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "On-Ramp", path: "/platform" },
                { name: "Off-Ramp", path: "/platform" },
                { name: "Custody", path: "/platform" },
                { name: "FX Engine", path: "/platform" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Developers & Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading font-semibold mb-6 text-lg text-foreground">Developers</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link 
                  to="/developers" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link 
                  to="/developers" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  Sandbox Access
                </Link>
              </li>
              <li className="text-sm text-muted-foreground/50 font-body">
                Changelog <span className="text-xs">(Coming Soon)</span>
              </li>
            </ul>

            <h3 className="font-heading font-semibold mb-4 text-lg text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 group">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:admin@hashpayremit.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  admin@hashpayremit.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-body">
                  Addis Ababa, Ethiopia
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground font-body">
                © {new Date().getFullYear()} HashPay LLC. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-muted-foreground font-body">
              <Link 
                to="/legal/privacy" 
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link 
                to="/legal/terms" 
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
