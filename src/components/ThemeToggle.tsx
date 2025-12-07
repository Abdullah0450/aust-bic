import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    
    if (dark) {
      // Dark theme (original tech vibes)
      root.style.setProperty('--background', '222 47% 5%');
      root.style.setProperty('--foreground', '210 40% 98%');
      root.style.setProperty('--card', '222 47% 8%');
      root.style.setProperty('--card-foreground', '210 40% 98%');
      root.style.setProperty('--popover', '222 47% 8%');
      root.style.setProperty('--popover-foreground', '210 40% 98%');
      root.style.setProperty('--primary', '185 100% 50%');
      root.style.setProperty('--primary-foreground', '222 47% 5%');
      root.style.setProperty('--secondary', '260 100% 65%');
      root.style.setProperty('--secondary-foreground', '210 40% 98%');
      root.style.setProperty('--muted', '217 33% 17%');
      root.style.setProperty('--muted-foreground', '215 20% 65%');
      root.style.setProperty('--accent', '185 80% 40%');
      root.style.setProperty('--accent-foreground', '210 40% 98%');
      root.style.setProperty('--border', '217 33% 20%');
      root.style.setProperty('--input', '217 33% 17%');
      root.style.setProperty('--ring', '185 100% 50%');
      root.style.setProperty('--glass-bg', '222 47% 8% / 0.6');
      root.style.setProperty('--glass-border', '217 33% 30% / 0.3');
      root.style.setProperty('--glow-primary', '185 100% 50%');
      root.style.setProperty('--glow-secondary', '260 100% 65%');
      root.style.setProperty('--gradient-start', '185 100% 50%');
      root.style.setProperty('--gradient-end', '260 100% 65%');
    } else {
      // Light theme (business professional with adjusted backgrounds)
      root.style.setProperty('--background', '210 30% 96%');
      root.style.setProperty('--foreground', '210 15% 15%');
      root.style.setProperty('--card', '210 100% 100%');
      root.style.setProperty('--card-foreground', '210 15% 15%');
      root.style.setProperty('--popover', '210 100% 100%');
      root.style.setProperty('--popover-foreground', '210 15% 15%');
      root.style.setProperty('--primary', '210 100% 50%');
      root.style.setProperty('--primary-foreground', '210 100% 100%');
      root.style.setProperty('--secondary', '25 95% 53%');
      root.style.setProperty('--secondary-foreground', '210 15% 15%');
      root.style.setProperty('--muted', '210 20% 88%');
      root.style.setProperty('--muted-foreground', '210 15% 35%');
      root.style.setProperty('--accent', '210 100% 40%');
      root.style.setProperty('--accent-foreground', '210 100% 100%');
      root.style.setProperty('--border', '210 25% 90%');
      root.style.setProperty('--input', '210 20% 94%');
      root.style.setProperty('--ring', '210 100% 50%');
      root.style.setProperty('--glass-bg', '210 100% 100% / 0.7');
      root.style.setProperty('--glass-border', '210 30% 85% / 0.4');
      root.style.setProperty('--glow-primary', '210 100% 50%');
      root.style.setProperty('--glow-secondary', '25 95% 53%');
      root.style.setProperty('--gradient-start', '210 100% 50%');
      root.style.setProperty('--gradient-end', '25 95% 53%');
    }
    
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors duration-300"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
