import { motion } from 'framer-motion';
import { Lightbulb, Users, DollarSign, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Lightbulb,
    title: 'Startup Incubation',
    description: 'Support & resources for early-stage startups to develop, test, and scale their ideas.',
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Access to industry experts and advisors who guide you through your entrepreneurial journey.',
  },
  {
    icon: DollarSign,
    title: 'Funding Access',
    description: 'Connect with seed grants, government programs, and investor networks for capital.',
  },
  {
    icon: Building,
    title: 'Co-working Space',
    description: 'Modern workspace with high-speed internet, meeting rooms, and collaboration areas.',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading mx-auto">
            Everything you need to transform your idea into a successful business venture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group service-card"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 transition-transform duration-300"
              >
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </motion.div>
              <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-outline group inline-flex">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
