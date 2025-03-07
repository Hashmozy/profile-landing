"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: SiGithub, href: "#", label: "GitHub" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: X, href: "#", label: "X (formerly Twitter)" },
  ];
  return (
    <footer className="bg-muted py-8">
      <div className="container px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-sm">
              © {currentYear} Asheri Musa. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mt-4 md:mt-0 mr-10"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
