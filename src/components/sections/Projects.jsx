import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Home-Chepo E-Commerce",
    description:
      "A modern, responsive Next.js e-commerce app with Firebase auth, product management, and smooth animations.",
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://home-chepo.netlify.app/",
    githubUrl: "https://github.com/shahrufhasan/Home-Chepo",
    image: "/home-chepo.jpg",
  },
  {
    title: "GreenNest",
    description:
      "A responsive React web app with Firebase authentication, allowing users to browse eco-friendly products and securely log in or sign up.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://enchanting-paprenjak-9b0961.netlify.app/",
    githubUrl: "https://github.com/shahrufhasan/GreenNest-With-React-and-Auth",
    image: "/greennest.png",
  },
  {
    title: "Study-Mate",
    description:
      "An online study platform where you can choose and search your study partner based on your likes and choices. Organize tasks, track progress, and collaborate.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://bespoke-torte-110e0f.netlify.app/",
    githubUrl: "https://github.com/shahrufhasan/Study-Mate",
    image: "/study-mate.png",
  },
  {
    title: "Home IO Apps Library",
    description:
      "A responsive React web app showcasing a collection of home automation applications, focusing on usability, clean design, and easy access to smart home tools.",
    tags: ["React", "JavaScript", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://funny-pastelito-5c55d3.netlify.app/",
    githubUrl: "https://github.com/shahrufhasan/Home-IO-Apps-Library",
    image: "/home-io.png",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container-custom"
      >
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion
            for creating exceptional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-border flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                    <Folder className="w-16 h-16 text-muted-foreground/50 group-hover:text-primary/50 transition-colors duration-300" />
                  </>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border text-foreground hover:bg-secondary hover:text-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
