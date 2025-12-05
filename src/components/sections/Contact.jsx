import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info.shahrufhasan@gmail.com",
      href: "mailto:info.shahrufhasan@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (347) 653-9444",
      href: "tel:+13476539444",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York City",
      href: "#",
    },
  ];

  // Optional: Show toast on submit
  const handleClick = () => {
    toast({
      title: "Message submitted!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container-custom"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Form */}
          <div>
            <form
              action="https://formspree.io/f/mwpgqbkr"
              method="POST"
              className="space-y-6"
              onSubmit={handleClick} // shows toast
            >
              <div className="grid sm:grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-secondary border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-secondary border-border focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-secondary border-border focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              {/* Optional redirect after submit */}
              {/* <input type="hidden" name="_redirect" value="https://yourwebsite.com/thank-you" /> */}

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-secondary rounded-xl border border-border">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="p-8 bg-foreground text-background rounded-xl">
              <h3 className="font-display font-semibold text-xl mb-3">
                Ready to start a project?
              </h3>
              <p className="text-background/70 mb-6">
                Let's collaborate and create something amazing together. I'm
                currently available for freelance work.
              </p>
              <Button
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="mailto:info.shahrufhasan@gmail.com">Let's Talk</a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
