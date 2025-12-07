// Navigation configuration
export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/activities', label: 'Activities' },
  { path: '/contact', label: 'Contact' },
];

// Animation configurations
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideInRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
};

// Color scheme
export const colors = {
  primary: 'hsl(185, 100%, 50%)', // Cyan
  secondary: 'hsl(260, 100%, 65%)', // Purple
  accent: 'hsl(185, 80%, 40%)', // Darker Cyan
  background: 'hsl(222, 47%, 5%)',
  foreground: 'hsl(210, 40%, 98%)',
  muted: 'hsl(217, 33%, 17%)',
  mutedForeground: 'hsl(215, 20%, 65%)',
};

// Service categories
export const serviceCategories = [
  {
    id: 'incubation',
    title: 'Business Incubation',
    icon: 'Lightbulb',
    description: 'Support & resources for early-stage startups',
  },
  {
    id: 'mentorship',
    title: 'Mentorship Program',
    icon: 'Users',
    description: 'Access to industry experts and advisors',
  },
  {
    id: 'funding',
    title: 'Funding Access',
    icon: 'DollarSign',
    description: 'Connect with seed grants and investors',
  },
  {
    id: 'coworking',
    title: 'Co-working Space',
    icon: 'Building',
    description: 'Modern workspace with high-speed internet',
  },
];

// Animation presets for common scenarios
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.4 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};
