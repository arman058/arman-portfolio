import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * Footer Component
 * Design: Modern Minimalist - clean, minimal footer with social links
 */
export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/arman058',
      label: 'GitHub',
      color: 'hover:text-foreground',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/arman-shaikh-4a9582218/',
      label: 'LinkedIn',
      color: 'hover:text-primary',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/codingwith_arman',
      label: 'Instagram',
      color: 'hover:text-primary',
    },
    {
      icon: Mail,
      href: 'mailto:shaikharman78693@gmail.com',
      label: 'Email',
      color: 'hover:text-primary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="bg-card border-t border-border py-12 md:py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-2">Arman Shaikh</h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer 
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-muted-foreground ${link.color} transition-colors duration-300`}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            Designed & Developed by Arman Shaikh © {new Date().getFullYear()}
          </p>
          <p className="mt-2 text-xs">
            Built with React, Vite, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
