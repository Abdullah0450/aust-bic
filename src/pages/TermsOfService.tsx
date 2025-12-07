import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import about from '@/assets/about.jpg';

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on BIC AUST\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or "mirror" the materials on any other server',
    },
    {
      title: '3. Disclaimer',
      content: 'The materials on BIC AUST\'s website are provided on an \'as is\' basis. BIC AUST makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    },
    {
      title: '4. Limitations',
      content: 'In no event shall BIC AUST or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BIC AUST\'s website, even if BIC AUST or an authorized representative has been notified orally or in writing of the possibility of such damage.',
    },
    {
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on BIC AUST\'s website could include technical, typographical, or photographic errors. BIC AUST does not warrant that any of the materials on its website are accurate, complete, or current. BIC AUST may make changes to the materials contained on its website at any time without notice.',
    },
    {
      title: '6. Links',
      content: 'BIC AUST has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BIC AUST of the site. Use of any such linked website is at the user\'s own risk.',
    },
    {
      title: '7. Modifications',
      content: 'BIC AUST may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
    },
    {
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
    },
    {
      title: '9. Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at:\n\nEmail: bic@aust.edu.pk\nPhone: +92 992922554\nAddress: Abbottabad University of Science & Technology, Havelian, Pakistan',
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
            alt="Terms of Service" 
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
              Terms of <span className="gradient-text glow-text">Service</span>
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

export default TermsOfService;
