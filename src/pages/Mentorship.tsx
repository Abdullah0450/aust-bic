import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import { Users, ArrowRight, CheckCircle } from 'lucide-react';
import about from '@/assets/about.jpg';

const Mentorship = () => {
  const benefits = [
    'Access to experienced industry mentors',
    'One-on-one guidance and coaching',
    'Business strategy and planning support',
    'Market validation and feedback',
    'Network expansion opportunities',
    'Personal and professional development',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={about} 
            alt="Mentorship" 
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
              Mentorship <span className="gradient-text glow-text">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with experienced mentors who have successfully navigated the entrepreneurial journey and can guide you through every stage of your startup.
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
                Expert <span className="gradient-text">Mentorship</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our mentorship programs connect founders with seasoned entrepreneurs and business leaders. Learn from their experiences, avoid common pitfalls, and accelerate your growth.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you need guidance on product development, market strategy, fundraising, or scaling operations, our mentors are here to support you every step of the way.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
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
            <h3 className="text-3xl font-heading font-bold mb-4">Find Your Mentor</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with experienced mentors who can help shape your entrepreneurial vision.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentorship;
