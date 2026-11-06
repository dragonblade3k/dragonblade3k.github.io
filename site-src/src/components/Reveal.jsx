import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 240, damping: 26, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
