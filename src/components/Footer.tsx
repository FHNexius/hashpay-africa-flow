import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import hashpayLogo from "@/assets/hashpay-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Animated gold line */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-gold"
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
              src={hashpayLogo}
              alt="HashPay"
              className="h-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Stablecoin infrastructure for Sub-Saharan Africa
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Compliance", path: "/compliance" },
                { name: "Contact", path: "/contact" },
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
            <h3 className="font-heading font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                "On-Ramp Solutions",
                "Off-Ramp Services",
                "Digital Asset Custody",
                "Liquidity Infrastructure",
              ].map((service) => (
                <li key={service} className="text-sm text-muted-foreground font-body">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:admin@hashpayremit.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  admin@hashpayremit.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-body">
                  Burnsville, MN<br />United States
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar with animated tagline */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Glowing tagline */}
            <div className="text-center md:text-left">
              <motion.p 
                className="text-lg font-heading font-semibold mb-2"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(253, 198, 57, 0.3)",
                    "0 0 20px rgba(253, 198, 57, 0.5)",
                    "0 0 10px rgba(253, 198, 57, 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-gradient">HashPay</span> — Connecting Stablecoins to Real Economies
              </motion.p>
              <motion.div 
                className="h-0.5 bg-gradient-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>

            <div className="text-center md:text-right space-y-2">
              <p className="text-sm text-muted-foreground font-body">
                © {new Date().getFullYear()} HashPay LLC. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/70 font-body">
                U.S. Registered Money Services Business
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
