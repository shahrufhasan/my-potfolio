import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiNetlify, SiVercel } from "react-icons/si";

const skills = [
  { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", level: 88, icon: FaJs, color: "#F7DF1E" },
  { name: "Firebase", level: 85, icon: SiFirebase, color: "#FFCA28" },
  { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", level: 88, icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", level: 75, icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", level: 70, icon: FaNodeJs, color: "#339933" },
  { name: "Git", level: 85, icon: FaGitAlt, color: "#F05032" },
  { name: "Figma", level: 72, icon: FaFigma, color: "#F24E1E" },
  { name: "Netlify", level: 80, icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", level: 78, icon: SiVercel, color: "#000000" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container-custom"
      >
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide">My Skills</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm proficient in modern frontend technologies and always eager to learn new tools
            that help me build better web experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-4 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 bg-background rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
