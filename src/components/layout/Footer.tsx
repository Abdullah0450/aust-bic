import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import bic from '@/assets/BIC-300x297.jpg';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: ['Home', 'About', 'Services', 'Activities', 'Contact'],
    },
    {
      title: 'Services',
      links: ['Business Incubation', 'Mentorship', 'Funding Access', 'Training Programs', 'Networking Events'],
    },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={bic}
                alt="BIC AUST Logo" 
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 object-cover"
              />
              <div>
                <h3 className="font-heading font-bold text-xl gradient-text">BIC AUST</h3>
                <p className="text-xs text-muted-foreground">Business Incubation Center</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering entrepreneurs through innovative solutions, mentorship, and resources to foster sustainable business growth.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/BIC.AUST', label: 'Facebook' },
                { Icon: Youtube, href: 'https://www.youtube.com/@AbbottabdUST', label: 'YouTube' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/bic-aust/', label: 'LinkedIn' },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links & Services */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (sectionIndex + 1) * 0.1 }}
            >
              <h4 className="font-heading font-semibold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((item) => {
                  let path = '';
                  if (section.title === 'Quick Links') {
                    path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                  } else if (section.title === 'Services') {
                    // Map service names to their routes
                    const serviceMap: { [key: string]: string } = {
                      'Business Incubation': '/business-incubation',
                      'Mentorship': '/mentorship',
                      'Funding Access': '/funding-access',
                      'Training Programs': '/training-programs',
                      'Networking Events': '/networking-events',
                    };
                    path = serviceMap[item] || '/services';
                  }

                  return (
                    <li key={item}>
                      {(section.title === 'Quick Links' || section.title === 'Services') ? (
                        <Link
                          to={path}
                          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors duration-300 group"
                        >
                          {item}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>
                      ) : (
                        <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer inline-flex items-center gap-2 group">
                          {item}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  Abbottabad University of Science & Technology, Havelian, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+92" className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  +92 992922554
                </a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:bic@aust.edu.pk" className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  bic@aust.edu.pk
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass h-80 w-full overflow-hidden rounded-2xl relative z-10 border border-white/10 group"
        >
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas_footer"
            src="https://maps.google.com/maps?q=Abbottabad+University+of+Science+and+Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            className="absolute inset-0 w-full h-full opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            title="AUST Campus Map"
          ></iframe>

          {/* Overlay for glass effect (fades out on hover) */}
          <div className="absolute inset-0 pointer-events-none bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 BIC AUST. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/sitemap" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
              Sitemap
            </a>
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

