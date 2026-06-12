import { motion } from 'framer-motion';
import { Briefcase, Award, Code, Zap } from 'lucide-react';
import SectionTitle from './SectionTitle';

/**
 * Experience Section Component
 * Design: Modern Minimalist - vertical timeline with cards
 */
export default function Experience() {
  const experiences = [
    {
      id: 1,
      icon: Briefcase,
      title: 'MERN-Stack Developer Intern',
      company: 'Being Ambitious',
      period: 'Dec 2025 - Feb 2026',
      description:
        ' Worked on Shopify embedded apps using Remix, React, Node.js(Express) Prisma, GraphQL, and Shopify APIs. Developed custom Side Cart systems with BOGO and Freebie rule implementations. Wrote and optimized SQL queries for backend data operations and reporting. Designed database schemas using Prisma and integrated APIs with database-driven systems. Developed and debugged production-level features and REST APIs. ',
      highlights: ['Remix','React', 'Node.js', 'Express', 'Prisma', 'Shopify APIs', "GraphQL"],
    },
    // {
    //   id: 2,
    //   icon: Code,
    //   title: 'Full Stack Developer',
    //   company: 'Digital Agency',
    //   period: 'Jun 2022 - Dec 2022',
    //   description:
    //     'Developed and maintained multiple client projects. Implemented REST APIs and responsive UIs for diverse client requirements.',
    //   highlights: ['MERN Stack', 'Tailwind CSS', 'MongoDB'],
    // },
    // {
    //   id: 3,
    //   icon: Award,
    //   title: 'Hackathon Winner',
    //   company: 'National Tech Hackathon',
    //   period: 'Mar 2022',
    //   description:
    //     'Built a fintech solution in 24 hours that won first place. Demonstrated rapid prototyping and problem-solving skills.',
    //   highlights: ['Rapid Development', 'Team Collaboration', 'Innovation'],
    // },
    // {
    //   id: 4,
    //   icon: Zap,
    //   title: 'Freelance Developer',
    //   company: 'Self-Employed',
    //   period: 'Jan 2021 - May 2022',
    //   description:
    //     'Completed 15+ projects for clients worldwide. Specialized in custom web applications and responsive design.',
    //   highlights: ['Client Management', 'Full Stack', 'Agile'],
    // },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container">
        <SectionTitle
          title="Experience & Timeline"
          subtitle="My professional journey"
          accentWord="Timeline"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    isEven ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`card-minimal ${isEven ? 'md:col-start-1' : 'md:col-start-2'}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-sm text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 font-mono">
                      {exp.period}
                    </p>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="hidden md:flex justify-center"
                  >
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
