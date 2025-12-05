import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shahrufhasan", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shahrufhasan/", label: "LinkedIn" },
    { icon: SiDiscord, href: "https://discord.com/channels/@shahrufhasan", label: "Discord" },
    { icon: Mail, href: "mailto:info.shahrufhasan@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container-custom"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-2xl mb-2">
              Shahruf<span className="text-primary">.</span>
            </h3>
            <p className="text-background/60 text-sm">
              Full Stack Web Developer | MERN Stack
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Shahruf Hasan. All rights reserved.
          </p>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
