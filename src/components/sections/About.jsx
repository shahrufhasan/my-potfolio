import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating visually appealing and intuitive user interfaces.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and best user experience.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container-custom"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium mb-4 tracking-wide">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Passionate about creating
              <span className="text-primary"> exceptional </span>
              web experiences
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a creative full-stack developer passionate about developing modern-looking websites.
              With a good understanding of the MERN Stack and comfort with Next.js and other front-end
              technologies, I apply my skills to make websites better and faster with user-friendly interfaces.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm aiming to grow within a team and believe that I can contribute to projects while gaining
              more skills. My expertise includes JavaScript, React, Firebase, and Tailwind, and I'm comfortable
              with Node.js, Express, and MongoDB. I continue to grow as a full-stack developer, always exploring
              new technologies and best practices.
            </p>


          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
