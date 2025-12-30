
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { ArrowRight, Code, GraduationCap, Briefcase, Star, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      title: "Resume Prsing",
      description: "Automated resume screening and candidate shortlisting, reducing manual HR effort and improving hiring decision efficiency through NLPdriven data extraction and ranking logic.",
      image: "https://res.cloudinary.com/jerrick/image/upload/v1745831603/680f46b1ae6b31001d4369f3.png",
      tags: ["Python", "React", "NLP","Resume Parsing","Recruitment Automation"],
      link: "/projects",
      code: "https://github.com"
    },
    {
      title: "Robotic Interview System",
      description: "Built an AI-driven interview automation system using Python and Flask to conduct and evaluate candidate interviews post–resumeshortlisting.",
      image: "data:image/jpeg;base64,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",
      tags: ["Python", "AI","NLP","HR Automation","Semantic Analysis"],
      link: "/projects",
      code: "https://github.com"
    },
    {
      title: "  AI-Powered HR Assistant Chatbot",
      description: " Developed an AI-driven HR assistant chatbot to automate responses to frequen employee queries such as leave balances, salary slips, policies, and holidays.",
      image: "data:image/jpeg;base64,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",
      tags: ["Python", "Flask", " NPL","RASA"],
      link: "/projects",
      code: "https://github.com"
    },
  ];

  const techStack = [
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Tailwind CSS", proficiency: 90 },
    { name: "React.js", proficiency: 80 },
    { name: "Node.js", proficiency: 75 },
    { name: "SQL Database", proficiency: 75 },
  ];

  return (
    <Layout>
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              About Me
            </span>
            <h2 className="text-4xl font-bold mb-6">Who I Am</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              I'm a Computer Science student specializing in AI & ML. Passionate about programming, AI integration, and building innovative web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Code className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Web Development
              </h3>
              <p className="text-muted-foreground text-center">
                Experienced in building modern, responsive web applications using React.js, Next.js, and Node.js.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Computer Science
              </h3>
              <p className="text-muted-foreground text-center">
                Strong foundation in algorithms, data structures, and programming principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Briefcase className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                AI & Machine Learning
              </h3>
              <p className="text-muted-foreground text-center">
                Specializing in artificial intelligence and machine learning algorithms and applications.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Skills
            </span>
            <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A collection of technologies I work with to build web applications and solve complex problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{tech.name}</h3>
                  <span className="text-sm text-muted-foreground">{tech.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-teal-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/50" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A selection of my recent web development and programming projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs py-1 px-3 bg-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href={project.code}
                      className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-lg max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-6 mx-auto">
              <Star className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently available for freelance work and open to new opportunities.
              If you have a project in mind or want to collaborate, let's connect!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
