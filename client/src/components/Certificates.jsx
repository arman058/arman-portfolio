import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';

/**
 * Certificates Section Component
 * Design: Modern Minimalist - grid layout with certificate cards
 */
export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Data Structures and Algorithms Design',
      issuer: 'NPTEL',
      date: 'Jul-Oct 2025',
      credentialUrl: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs81/Course/NPTEL25CS81S36370083810844162.pdf',
    },
    {
      id: 2,
      title: 'Software Testing',
      issuer: 'NPTEL',
      date: 'Jul-Oct 2025',
      credentialUrl: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs113/Course/NPTEL25CS113S56370179310844162.pdf',
    },
    {
      id: 3,
      title: 'Introduction to Software Engineering',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/F4J23NUTFO38',
    },
    {
      id: 4,
      title: 'Software Developer Career Guide and Interview Preparation',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/P0CHUFSG5M0T',
    },
    {
      id: 5,
      title: 'Spring Data Repositories',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/0501GHNKN04N ',
    },
    {
      id: 6,
      title: 'Developing Front-End Apps with React',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/REG2IINHSG8K',
    },
    {
      id: 7,
      title: 'Full Stack Software Developer Assessment',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/PI5VYL49XOEX',
    },
    {
      id: 8,
      title: 'Introduction to HTML, CSS, & JavaScript',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/C1R1M2NDD6YE',
    },
    {
      id: 9,
      title: 'Spring MVC, Spring Boot and Rest Controllers',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/5VZKMKS5KQHR',
    },
    {
      id: 10,
      title: 'Spring - Ecosystem and Core',
      issuer: 'Coursera',
      date: 'Jan 2025',
      credentialUrl: 'https://coursera.org/verify/ELVJRPFXJW7A',
    },
    {
      id: 11,
      title: "Backend Development using ASP.Net",
      issuer: "Coursera",
      date: "Apr 15, 2025",
      credentialUrl: "https://coursera.org/verify/1KW6VZSWUD3V",
    },
    {
      id: 12,
      title: "Python for the Absolute Beginner",
      issuer: "Coursera",
      date: "Apr 16, 2025",
      credentialUrl: "https://coursera.org/verify/PFDRMMAIVN1F",
    },
    {
      id: 13,
      title: "Kubernetes Basics for DevOps",
      issuer: "Coursera",
      date: "Apr 15, 2025",
      credentialUrl: "https://coursera.org/verify/1PD1VE39CWEK",
    },
    {
      id: 14,
      title: "Docker Basics for DevOps",
      issuer: "Coursera",
      date: "Apr 15, 2025",
      credentialUrl: "https://coursera.org/verify/0KE1BAOM0XE7",
    },
    {
      id: 15,
      title: "Jenkins for Beginners",
      issuer: "Coursera",
      date: "Apr 15, 2025",
      credentialUrl: "https://coursera.org/verify/A605W3YALO3Z",
    },
    {
      id: 16,
      title: "Git Basics for DevOps",
      issuer: "Coursera",
      date: "Apr 15, 2025",
      credentialUrl: "https://coursera.org/verify/BFTXBDL017YI",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="certificates" className="py-20 md:py-32 bg-card">
      <div className="container">
        <SectionTitle
          title="Certifications & Achievements"
          subtitle="Continuous learning and growth"
          accentWord="Achievements"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: '#0066FF' }}
              className="card-minimal flex flex-col items-center text-center"
            >
              {/* Certificate Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award size={32} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-primary font-semibold text-sm mb-2">
                {cert.issuer}
              </p>
              <p className="text-muted-foreground text-sm mb-4 font-mono">
                {cert.date}
              </p>

              {/* View Credential Button */}
              <motion.a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary font-semibold text-sm hover:underline transition-all"
              >
                View Credential →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 p-8 bg-background rounded-lg border border-border text-center"
        >
          <p className="text-muted-foreground text-lg">
            I believe in continuous learning and regularly update my skills with
            the latest technologies. Always exploring new courses and certifications
            to stay ahead in the industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
