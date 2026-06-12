import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

/**
 * Projects Section Component
 * Design: Modern Minimalist - project cards with tech badges
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'VentureMatch',
      description:
        'A comprehensive startup and investor platform connecting entrepreneurs with funding opportunities. Features real-time notifications, investor dashboards, and pitch management.',
      tags: ['React', 'ASP.Net Core', 'MySQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/arman058/VentureMatch',
      featured: true,
      image: '/images/project/Finvest.png',
    },
    {
      id: 2,
      title: 'Masala E-Commerce Platform',
      description:
        'Full-featured Masala e-commerce solution with product catalog, shopping cart, and admin dashboard for inventory management.',
      tags: ['React', 'Tailwind CSS','Node.js(Express)', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      image: 'images/project/Masala_Ecommerce.png',
    },
    {
      id: 3,
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering. Built with modern web technologies.',
      tags: ['React', 'PHP', 'Supabase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/arman058/task_tracker',
      featured: false,
      image: 'images/project/Task_Management.png',
    },
    {
      id: 4,
      title: 'College/School ERP and Website Content Management System',
      description:
        'ERP software for college and school platformm including website content management system',
      tags: ['React', 'ASP.Net Core', 'MySQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/arman058/College_ERP_System',
      featured: false,
      image: 'images/project/ERP.png',
    },
    {
      id: 5,
      title: 'Plants Landing Page',
      description:
        'Plants Landing Page template with cart checkin and checkout. Its a static webpage just for UI/UX.',
      tags: ['React', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/arman058/plants-landing_page',
      featured: false,
      image: 'images/project/Plants_Landing_Page.png',
    },
    {
      id: 6,
      title: 'Stock Market Portflio Web App',
      description:
        'Developed a responsive stock portfolio management application with real-time simulated market data, portfolio valuation, and profit/loss tracking.',
      tags: ['React', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/arman058/stock_portfolio_app',
      featured: false,
      image: 'images/project/stock_portfolio.png',
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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-card"
      style={{
        backgroundImage: 'url(/images/projects-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-card/80" style={{ position: 'absolute' }} />

      <div className="container relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my best work"
          accentWord="Projects"
        />

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={projectVariants}
            className="mb-16 card-minimal border-2 border-primary/30 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="h-80 rounded-lg border border-border overflow-hidden">
  <img
    src={featuredProject.image}
    alt={featuredProject.title}
    className="w-full h-full object-cover"
  />
</div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold">{featuredProject.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {featuredProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-lg border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {/* <motion.a
                    href={featuredProject.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </motion.a> */}
                  <motion.a
                    href={featuredProject.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                    target='_blank'
                  >
                    <Github size={18} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -8 }}
              className="card-minimal flex flex-col h-full"
            >
              {/* Image */}
              {/* <div className="h-48 bg-secondary rounded-lg border border-border flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary/30">
                    {project.id}
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {project.image}
                  </p>
                </div>
              </div> */}
              <div className="h-48 rounded-lg border border-border mb-6 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary text-foreground text-xs rounded border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {/* <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink size={16} />
                  Live
                </motion.a> */}
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm"
                  target='_blank'
                >
                  <Github size={16} />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
