import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'circle';
  count?: number;
}

const Skeleton = ({
  className = 'w-full h-12',
  variant = 'text',
  count = 1,
}: SkeletonProps) => {
  const skeletonVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  const baseClass = 'bg-muted rounded-lg';

  const variantClasses = {
    text: 'h-4 w-full mb-3',
    card: 'h-48 w-full rounded-xl',
    circle: 'w-12 h-12 rounded-full',
  };

  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className={`${baseClass} ${variantClasses[variant]} ${
            i < count - 1 ? 'mb-3' : ''
          } ${className}`}
        />
      ))}
    </div>
  );
};

export default Skeleton;
