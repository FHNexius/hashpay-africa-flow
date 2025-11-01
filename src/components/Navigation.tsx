import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RippleButton from "./RippleButton";
import hashpayLogo from "@/assets/hashpay-logo.png";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Compliance",
    path: "/compliance"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-panel border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img src={hashpayLogo} alt="HashPay" whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.3
          }} className="h-52" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="relative group">
                <span className={`text-sm font-body font-medium transition-colors ${location.pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-foreground"}`}>
                  {link.name}
                </span>
                <motion.span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-gold" initial={{
              width: 0
            }} animate={{
              width: location.pathname === link.path ? "100%" : 0
            }} whileHover={{
              width: "100%"
            }} transition={{
              duration: 0.3
            }} />
              </Link>)}
            
            <RippleButton size="default" className="px-6">
              Contact Sales
            </RippleButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} whileTap={{
          scale: 0.95
        }} aria-label="Toggle menu">
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <X size={24} />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <Menu size={24} />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden overflow-hidden">
              <div className="py-4 space-y-3 border-t border-border/30">
                {navLinks.map((link, idx) => <motion.div key={link.path} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.3,
              delay: idx * 0.05
            }}>
                    <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 px-4 rounded-lg text-base font-body font-medium transition-all ${location.pathname === link.path ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-primary/5"}`}>
                      {link.name}
                    </Link>
                  </motion.div>)}
                <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.3,
              delay: navLinks.length * 0.05
            }} className="pt-2">
                  <RippleButton size="default" className="w-full">
                    Contact Sales
                  </RippleButton>
                </motion.div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.nav>;
};
export default Navigation;