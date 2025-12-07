import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountingNumberProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const CountingNumber = ({ value, label, suffix = '', duration = 2 }: CountingNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animationDuration = duration * 1000;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      setCount(Math.floor(value * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-muted-foreground text-lg">{label}</p>
    </motion.div>
  );
};

export default CountingNumber;
