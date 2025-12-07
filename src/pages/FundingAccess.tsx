import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import { DollarSign, ArrowRight, CheckCircle } from 'lucide-react';
import about from '@/assets/about.jpg';

const FundingAccess = () => {
  const fundingSources = [
    'Seed grants and government funding',
    'Angel investor network connections',
    'Venture capital introductions',
    'Pitch competition opportunities',
    'Grant writing support',
    'Investor pitch preparation',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={about} 
            alt="Funding Access" 
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
              Funding & <span className="gradient-text glow-text">Investment</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access multiple funding channels and connect with investors to fuel your startup's growth.
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
                Fuel Your <span className="gradient-text">Growth</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Securing funding is critical for startup growth. AUST BIC connects entrepreneurs with diverse funding sources, from government grants to venture capital investors.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide guidance on preparing compelling pitches, crafting business plans, and navigating the investment landscape to maximize your chances of success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">Funding Sources</h3>
              <ul className="space-y-4">
                {fundingSources.map((source, index) => (
                  <motion.li
                    key={source}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{source}</span>
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
            <h3 className="text-3xl font-heading font-bold mb-4">Secure Funding for Your Startup</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Learn about available funding opportunities and connect with investors.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Explore Opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FundingAccess;
