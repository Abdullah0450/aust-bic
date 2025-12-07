import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import about from '@/assets/about.jpg';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to BIC AUST (Business Incubation Center at Abbottabad University of Science & Technology). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information.',
    },
    {
      title: '2. Information We Collect',
      content: 'We may collect information about you in a variety of ways. The information we may collect on the site includes:\n\n• Personal identification information (name, email address, phone number, etc.)\n• Information you provide when contacting us through our website\n• Information about your interactions with our website\n• Technical information about your browser and device\n• Usage data and analytics information',
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect in the following ways:\n\n• To respond to your inquiries and provide customer support\n• To send promotional communications (with your consent)\n• To improve our website and services\n• To analyze usage patterns and trends\n• To prevent fraudulent transactions\n• To comply with legal obligations',
    },
    {
      title: '4. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.',
    },
    {
      title: '5. Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites. We encourage you to review the privacy policies of any third-party websites before providing your information.',
    },
    {
      title: '6. Your Rights',
      content: 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.',
    },
    {
      title: '7. Contact Us',
      content: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at:\n\nEmail: bic@aust.edu.pk\nPhone: +92 992922554\nAddress: Abbottabad University of Science & Technology, Havelian, Pakistan',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={about} 
            alt="Privacy Policy" 
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
              Privacy <span className="gradient-text glow-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last updated: December 7, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
