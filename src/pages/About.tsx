import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import CountingNumber from '@/components/CountingNumber';
import { Target, Eye, Compass, Search, Edit, Palette, Code, Rocket, LineChart, Zap, Users, Trophy, Lightbulb, Handshake, TrendingUp } from 'lucide-react';
import about from '@/assets/about.jpg';
import work from '@/assets/work.jpg';
import partner1 from '@/assets/partner 1.png';
import partner2 from '@/assets/partner2.png';
import partner3 from '@/assets/partner3.png';
import partner4 from '@/assets/partner4.png';

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Identify innovative ideas and potential founders through workshops and idea clinics.', icon: Search },
  { num: '02', title: 'Define', desc: 'Shape ideas into well-structured concepts with market research and validation.', icon: Edit },
  { num: '03', title: 'Design', desc: 'Convert concepts into workable prototypes and business model canvas.', icon: Palette },
  { num: '04', title: 'Develop', desc: 'Build MVP with technical support and iterative product development.', icon: Code },
  { num: '05', title: 'Deploy', desc: 'Launch to market with go-to-market strategy and early user onboarding.', icon: Rocket },
  { num: '06', title: 'Drive', desc: 'Scale the startup with performance tracking and investor connections.', icon: LineChart },
];

const whyChooseUsItems = [
  { icon: Zap, text: 'Empowering Students Into Founders' },
  { icon: Users, text: 'Access to Industry Mentors & Experts' },
  { icon: Lightbulb, text: 'State-of-the-Art Innovation & Co-working Space' },
  { icon: TrendingUp, text: 'Funding & Investor Opportunities' },
  { icon: Trophy, text: 'Training, Workshops & Startup Bootcamps' },
  { icon: Handshake, text: 'Support From Idea to Launch' },
  { icon: Eye, text: 'Strong University Ecosystem' },
  { icon: Target, text: 'Zero Equity, Zero Cost for Students' },
  { icon: Compass, text: 'Networking & Collaboration Opportunities' },
  { icon: Code, text: 'Proven Track Record of Successful Startups' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={about} 
            alt="Business Incubation Center" 
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
              About <span className="gradient-text glow-text">BIC AUST</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Business Incubation Center at AUST fosters innovation, entrepreneurship, 
              and startup culture by providing mentorship, workspace, training, and access 
              to funding opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Plan */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', text: 'Empowering entrepreneurs through innovative solutions, mentorship, and resources to foster sustainable business growth and societal impact.' },
              { icon: Eye, title: 'Our Vision', text: 'To be a leading catalyst in driving entrepreneurship, fostering a culture of innovation, and contributing to economic development and job creation in Pakistan.' },
              { icon: Compass, title: 'Our Plan', text: 'BIC teams leads innovative start-ups and converts them into growing business enterprises through structured support and guidance.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-D Process */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">
              Our <span className="gradient-text">6-D Process</span>
            </h2>
            <p className="section-subheading mx-auto">
              A structured approach to transform your ideas into successful ventures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                <span className="absolute -top-4 -right-4 text-8xl font-heading font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          {/* Image and Content Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                <img 
                  src={work} 
                  alt="Why Choose BIC AUST" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                <span className="gradient-text">Why Choose Us?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are committed to transforming your innovative ideas into successful business ventures. 
                Our comprehensive ecosystem provides everything you need to thrive as an entrepreneur.
              </p>
              
              <div className="space-y-3">
                {whyChooseUsItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Numbers Section Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 border border-primary/20"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-heading font-bold text-center mb-2">Some Numbers</h3>
              <p className="text-center text-muted-foreground">Measuring Our Journey</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <CountingNumber value={22} label="Satisfied Clients" />
              <CountingNumber value={15} label="Projects Completed" />
              <CountingNumber value={2} label="Accolades Earned" />
              <CountingNumber value={3000} label="Students" suffix="+" />
            </div>
          </motion.div>
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
                Innovation begins with a single step. Partner with AUST BIC to transform your concept 
                into a real-world solution.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  GET A QUOTE
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
