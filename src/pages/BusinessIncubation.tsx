import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import { Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import about from '@/assets/about.jpg';

const BusinessIncubation = () => {
  const features = [
    'Structured incubation environment',
    'Expert mentorship and guidance',
    'Access to state-of-the-art facilities',
    'Networking with industry professionals',
    'Support from ideation to launch',
    'Performance tracking and feedback',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={about} 
            alt="Business Incubation" 
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
              Business <span className="gradient-text glow-text">Incubation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide a structured incubation environment where startups receive the guidance, tools, and resources needed to develop, test, and scale their ideas.
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
                What is <span className="gradient-text">Business Incubation?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Business incubation is a dynamic process that supports the creation and growth of new businesses. At AUST BIC, we nurture innovative ideas and transform them into viable, sustainable enterprises.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From ideation to launch, we support you at every stage of your entrepreneurial journey with hands-on mentorship, technical resources, and access to our network of industry experts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">Key Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
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
            <h3 className="text-3xl font-heading font-bold mb-4">Ready to Launch Your Startup?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join AUST BIC and turn your innovative idea into a successful business.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessIncubation;
