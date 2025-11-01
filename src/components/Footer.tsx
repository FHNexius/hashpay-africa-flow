import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-navy-deep font-heading font-bold text-xl">H</span>
              </div>
              <span className="text-2xl font-heading font-bold">HashPay</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Stablecoin infrastructure for Sub-Saharan Africa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">On-Ramp Solutions</li>
              <li className="text-sm text-muted-foreground">Off-Ramp Services</li>
              <li className="text-sm text-muted-foreground">Digital Asset Custody</li>
              <li className="text-sm text-muted-foreground">Liquidity Infrastructure</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:admin@hashpayremit.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  admin@hashpayremit.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Burnsville, MN<br />United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HashPay LLC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              U.S. Registered Money Services Business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
