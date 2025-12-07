import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import { MapPin, Mail, Phone } from 'lucide-react';
import about from '@/assets/about.jpg';

const Sitemap = () => {
  const sitemapLinks = [
    {
      category: 'Main Pages',
      links: [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Activities', path: '/activities' },
        { title: 'Contact Us', path: '/contact' },
      ],
    },
    {
      category: 'Services',
      links: [
        { title: 'Business Incubation', path: '/business-incubation' },
        { title: 'Mentorship', path: '/mentorship' },
        { title: 'Funding Access', path: '/funding-access' },
        { title: 'Training Programs', path: '/training-programs' },
        { title: 'Networking Events', path: '/networking-events' },
      ],
    },
    {
      category: 'Legal',
      links: [
        { title: 'Privacy Policy', path: '/privacy-policy' },
        { title: 'Terms of Service', path: '/terms-of-service' },
        { title: 'Sitemap', path: '/sitemap' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={about} 
            alt="Sitemap" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <Scene3D className="opacity-40" showGeometry={false} />
        <div className="hero-glow left-0 top-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Site <span className="gradient-text glow-text">Map</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Navigate through all sections of the BIC AUST website to find the information you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {sitemapLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                variants={itemVariants}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-heading font-bold mb-6 gradient-text">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.title}
                      variants={itemVariants}
                      transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                        {link.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 glass-card p-12 text-center"
          >
            <h3 className="text-2xl font-heading font-bold mb-8">Need Help?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-muted-foreground text-sm">
                    Abbottabad University of Science & Technology, Havelian, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+92992922554" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +92 992922554
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:bic@aust.edu.pk" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    bic@aust.edu.pk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
