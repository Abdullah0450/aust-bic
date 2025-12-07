import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import { Users, ArrowRight, CheckCircle } from 'lucide-react';
import about from '@/assets/about.jpg';

const NetworkingEvents = () => {
  const eventTypes = [
    'Monthly networking meetups',
    'Industry panel discussions',
    'Founder roundtables',
    'Startup showcases',
    'Investor pitch events',
    'Alumni entrepreneur sessions',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={about} 
            alt="Networking Events" 
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
              Networking <span className="gradient-text glow-text">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with entrepreneurs, investors, and industry leaders. Build relationships that can transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold mb-6">
                Expand Your <span className="gradient-text">Network</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Networking is essential for business growth. Our events bring together founders, mentors, investors, and industry professionals to foster collaboration and create opportunities.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're looking for co-founders, investment partners, or strategic alliances, our networking events provide the perfect platform to build meaningful connections.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">Event Types</h3>
              <ul className="space-y-4">
                {eventTypes.map((event, index) => (
                  <motion.li
                    key={event}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{event}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <h3 className="text-3xl font-heading font-bold mb-4">Join Our Next Event</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with fellow entrepreneurs and industry leaders in our upcoming networking events.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NetworkingEvents;
