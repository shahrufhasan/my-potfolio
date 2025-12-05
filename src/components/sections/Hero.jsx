import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAvatar from "@/assets/hero-avatar.png";

const Hero = () => {
  return (
    <section className="min-h-[75vh] flex items-center justify-center relative overflow-hidden bg-background pt-20 pb-10">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary font-medium mb-4 tracking-wide"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-primary">Shahruf Hasan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium"
            >
              Web Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Crafting beautiful, responsive, and user-friendly web experiences
              with modern technologies and clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary font-medium px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/shahrufhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shahrufhasan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info.shahrufhasan@gmail.com"
                className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
            whileHover="hover"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                variants={{
                  hover: { scale: 1.1, rotate: 5 }
                }}
                transition={{ duration: 0.5 }}
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent animate-pulse-soft blur-3xl"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                variants={{
                  hover: { scale: 1.15, rotate: -5 }
                }}
                transition={{ duration: 0.5 }}
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-primary/30 to-transparent animate-float blur-2xl"
              />
            </div>

            {/* Animated Triangle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[34rem] lg:h-[34rem] opacity-20 text-primary"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50 10 L90 90 L10 90 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Animated Oval */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem] lg:w-[38rem] lg:h-[38rem] opacity-20 text-primary"
                viewBox="0 0 100 100"
              >
                <ellipse
                  cx="50"
                  cy="50"
                  rx="45"
                  ry="25"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Photo Container */}
            <motion.div
              variants={{
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-secondary"
            >
              <img
                src={heroAvatar}
                alt="Shahruf Hasan"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
