import { motion } from 'framer-motion';

/**
 * SectionTitle Component
 * Design: Modern Minimalist - consistent section headings with accent
 * Props:
 *   - title: Main heading text
 *   - subtitle: Optional subtitle/description
 *   - accentWord: Word to highlight in primary color (optional)
 */
export default function SectionTitle({ title, subtitle, accentWord }) {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderTitle = () => {
    if (!accentWord) return title;

    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={titleVariants}
      className="mb-12 md:mb-16"
    >
      <h2 className="section-title">{renderTitle()}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
