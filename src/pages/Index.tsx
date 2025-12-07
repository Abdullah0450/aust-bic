import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <TeamSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
