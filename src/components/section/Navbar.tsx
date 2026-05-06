"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "HOME", href: "/#home" },
  { name: "PRODUCTS", href: "/#products" },
  { name: "PARTNERSHIP", href: "/#partnerships" },
  { name: "ABOUT", href: "/#story" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const location = useLocation();
  const path = usePathname();
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (path === "/") {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled || path !== "/" ? "bg-white/80 backdrop-blur-lg shadow-lg py-3" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between redd">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center "
          >
            <Image
              src="/logo-with-white-stroke.png"
              alt="Bakemills Logo"
              width={100}
              height={100}
              className="object-contain reds size-20"
            />
            <span className="text-3xl font-display font-black text-chocolate tracking-tighter ">
              Bake<span className="text-caramel">mills</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[14px] font-bold text-chocolate hover:text-caramel transition-colors tracking-[1px]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-chocolate text-cream rounded-full font-display italic font-bold text-[16px] tracking-[3px] uppercase shadow-lg shadow-chocolate/20"
            >
              Contact
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-chocolate"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-beige/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-bold text-chocolate py-2 uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact")}
              >
                <button className="w-full py-4 bg-chocolate text-cream rounded-full font-display italic font-bold text-xl tracking-[4px] uppercase shadow-lg shadow-chocolate/20 mt-4">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
