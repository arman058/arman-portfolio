import { motion } from 'framer-motion';
import { Code, Zap, Lightbulb, Target } from 'lucide-react';
import SectionTitle from './SectionTitle';

/**
 * About Section Component
 * Design: Modern Minimalist - clean cards with icons and highlights
 */
export default function About() {
  const highlights = [
    {
      icon: Zap,
      title: 'Full Stack Developer',
      description: 'Worked on production-level applications',
    },
    {
      icon: Code,
      title: 'MERN & Next.js Expert',
      description: 'Full stack development with modern frameworks',
    },
    {
      icon: Lightbulb,
      title: 'Clean & Modern UI',
      description: 'Responsive designs with great user experience',
    },
    {
      icon: Target,
      title: 'Scalable Systems',
      description: 'Architecture focused on performance and growth',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
          accentWord="Me"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left - Bio */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-full aspect-square bg-secondary rounded-lg border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                                  <img className="w-full aspect-square" src="about-profile-pic.jpeg" alt="" />
                {/* <div className="text-center">
                  <div className="text-6xl font-bold text-primary/30 mb-2">
                    AS
                  </div>
                  <p className="text-muted-foreground text-sm">Profile Image</p>
                </div> */}
              </div>
            </div>
          </motion.div>

          {/* Right - Bio Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Arman Shaikh, an MCA student and Full Stack Developer passionate about building scalable, secure, and user-focused web applications. My expertise spans MERN Stack, ASP.NET Core, Java, Python, SQL, and modern frontend technologies such as React and Next.js.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I have worked on projects ranging from ERP systems and AI-powered platforms to Shopify applications and startup-investor ecosystems. I enjoy solving complex problems, designing efficient backend architectures, and crafting intuitive user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond development, I continuously explore emerging technologies, software engineering best practices, and AI-driven solutions to create impactful digital products.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: '#0066FF' }}
                className="card-minimal"
              >
                <div className="mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
