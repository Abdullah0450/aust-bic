import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="hero-glow left-1/4 top-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center glow-box"
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8">
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="section-heading mb-6">
            Ready to Launch Your <span className="gradient-text">Startup</span>?
          </h2>
          
          <p className="section-subheading mx-auto mb-10">
            Join our incubation program and get the support, resources, and mentorship 
            you need to transform your idea into a successful business.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary group">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-outline">
              Learn About the Process
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
