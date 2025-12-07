import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import { 
  Lightbulb, 
  GraduationCap, 
  DollarSign, 
  Building, 
  Users, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

import service from '@/assets/service.jpg';
import coworkingSpace from '@/assets/coworking-space.jpg';
import mentorship from '@/assets/mentorship.jpg';
import partner1 from '@/assets/partner 1.png';
import partner2 from '@/assets/partner2.png';
import partner3 from '@/assets/partner3.png';
import partner4 from '@/assets/partner4.png';

const services = [
  {
    icon: Lightbulb,
    title: 'Business Incubation',
    description: 'AUST BIC provides a structured incubation environment where startups receive the guidance, tools, and resources needed to develop, test, and scale their ideas. From ideation to launch, we support you at every stage of your entrepreneurial journey.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Building',
    description: 'We conduct regular workshops, seminars, masterclasses, and startup bootcamps focused on entrepreneurship, business model development, marketing, financial management, and pitching.',
  },
  {
    icon: DollarSign,
    title: 'Access to Funding & Investment Opportunities',
    description: 'AUST BIC connects startups with funding channels such as seed grants, government funding programs, investor networks, and pitch competitions. We help founders prepare strong pitches and meet potential investors.',
  },
  {
    icon: Building,
    title: 'Co-working & Innovation Space',
    description: 'Startups get access to a productive innovation space equipped with high-speed internet, meeting rooms, workstations, and collaboration areas that encourage teamwork, creativity, and innovation.',
  },
  {
    icon: Users,
    title: 'Networking & Industry Linkages',
    description: 'We regularly organize networking events, meetups, and partner collaborations—helping startups connect with industry experts, potential clients, alumni entrepreneurs, and strategic partners. These connections open doors to new opportunities.',
  },
  {
    icon: Zap,
    title: 'Events & Startup Showcases',
    description: 'AUST BIC hosts demo days, startup exhibitions, and pitch events where founders can showcase their innovations to investors, partners, and the wider community.',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={service} 
            alt="Services" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <Scene3D className="opacity-40" showGeometry={false} />
        <div className="hero-glow right-0 top-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Our <span className="gradient-text glow-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AUST BIC empowers entrepreneurs through incubation, mentorship, funding opportunities, 
              co-working space, professional training, and strong industry linkages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={coworkingSpace} 
                  alt="Modern coworking space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading font-semibold text-2xl mb-2">Innovation Space</h3>
                  <p className="text-muted-foreground text-sm">State-of-the-art workspace designed for creativity</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={mentorship} 
                  alt="Mentorship session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading font-semibold text-2xl mb-2">Expert Mentorship</h3>
                  <p className="text-muted-foreground text-sm">One-on-one guidance from industry veterans</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Can We Help You Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              How can we help you?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AUST BIC empowers entrepreneurs through incubation, mentorship, funding opportunities, 
              co-working space, professional training, and strong industry linkages—helping startups 
              build, launch, and scale their ideas successfully.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8 group hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">
              <span className="gradient-text">Our Partners</span>
            </h2>
            <p className="section-subheading mx-auto">
              Collaborating with leading institutions and organizations to drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              {
                name: 'Higher Education Commission',
                logo: partner1,
              },
              {
                name: 'Benazir Bhutto Shaheed University',
                logo: partner2,
              },
              {
                name: 'The Islamia University',
                logo: partner3,
              },
              {
                name: 'AUST Business Incubation Center',
                logo: partner4,
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <div className="glass-card p-8 h-32 md:h-40 w-32 md:w-40 flex items-center justify-center rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="14" fill="%23999"%3E' + partner.name + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Head BIC Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Message from Head BIC
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Entrepreneurship and innovation are key drivers of economic and technological growth. 
              Universities play a crucial role in fostering an entrepreneurial ecosystem where ideas can 
              be transformed into impactful solutions. At Abbottabad University of Science & Technology (AUST), 
              the Business Incubation Center (BIC) has been established to support and promote student-led startups, 
              research-driven innovations, and industry-academia collaborations. Our mission is to equip aspiring 
              entrepreneurs with the necessary mentorship, funding opportunities, and technical resources to develop 
              successful ventures.
            </p>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl">Rashid Mehmood</h4>
                <p className="text-muted-foreground text-sm">Manager BIC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Would you like to start a project with us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hands with AUST BIC to turn your innovative idea into a scalable business. Let's build the future together.
              </p>
              <Link to="/contact" className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2 group">
                GET A QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
