import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

/**
 * Skills Section Component
 * Design: Modern Minimalist - skill categories with badge layout
 */
export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['PHP', 'JavaScript', 'Java', 'Python', 'C', 'C++', 'C#'],
    },
    {
      category: 'Android Development',
      skills: ['React Native', 'Java', 'Flutter', 'XML'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'ASP.NET Core', 'REST APIs', 'GraphQL', 'Authentication', 'JSP', 'Spring Boot', 'Flask', 'Fast API'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Prisma ORM', 'JDBC','SQL Server Management'],
    },
//     {
//   category: 'AI & Machine Learning',
//   skills: [
//     'Machine Learning',
//     'Natural Language Processing (NLP)',
//     'Scikit-learn',
//     'Pandas',
//     'NumPy',
//     'TensorFlow',
//     'PyTorch',
//     'OpenAI APIs',
//     'Prompt Engineering',
//     'LLM Integration'
//   ],
// },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'VS Code', 'Postman', 'GitHub', 'Vercel', 'AWS', 'Azure', 'Maven', 'Gradle'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-background"
      style={{
        backgroundImage: 'url(/images/skills-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" style={{ position: 'absolute' }} />

      <div className="container relative z-10">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies I work with"
          accentWord="Expertise"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="card-minimal"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#0066FF',
                      color: '#FFFFFF',
                    }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 p-8 bg-card rounded-lg border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground text-lg">
            I'm always exploring new technologies and best practices. Currently
            diving deeper into Web3, serverless architecture, and advanced
            system design patterns. Passionate about staying at the forefront
            of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
