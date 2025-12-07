import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-3 border-muted rounded-full border-t-primary"
      />
    </motion.div>
  );
};

export default PageLoader;
