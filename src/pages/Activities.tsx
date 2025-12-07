import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Scene3D from '@/components/three/Scene3D';
import { ExternalLink } from 'lucide-react';

import pic1 from '@/assets/pic1.jpg';
import pic2 from '@/assets/pic2.jpg';
import pic3 from '@/assets/pic3.jpg';
import pic4 from '@/assets/pic4.jpg';
import pic5 from '@/assets/pic5.jpg';
import pic6 from '@/assets/pic6.jpg';
import pic7 from '@/assets/pic7.jpg';
import pic8 from '@/assets/pic8.jpg';
import pic9 from '@/assets/pic9.jpg';
import pic10 from '@/assets/pic10.jpg';
import pic11 from '@/assets/pic11.jpg';
import pic12 from '@/assets/pic12.jpg';
import pic13 from '@/assets/pic13.jpg';

const activities = [
  {
    id: 1,
    title: 'Google Career Certification Orientation',
    description: 'Orientation session by TechValley on importance of Google Career Certification for "Skills for Entrepreneurs".',
    category: 'Workshop',
    image: pic1,
  },
  {
    id: 2,
    title: 'World Mental Health Day — Innovation for Impact',
    description: 'A special event focused on mental health awareness and innovative approaches to wellbeing.',
    category: 'Event',
    image: pic2,
  },
  {
    id: 3,
    title: 'Ignite Your Entrepreneurial Journey',
    description: 'A BIC-Led Initiative to Empower Future Entrepreneurs with essential skills and mindset.',
    category: 'Initiative',
    image: pic3,
  },
  {
    id: 4,
    title: 'Software House Established Under BIC',
    description: 'Software House Established Under BIC at the Department of Computer Science.',
    category: 'Milestone',
    image: pic4,
  },
  {
    id: 5,
    title: 'Seminar on "Securing the Future of Pakistan"',
    description: 'Addressing Climate and Water Challenges through innovation and entrepreneurship.',
    category: 'Seminar',
    image: pic5,
  },
  {
    id: 6,
    title: 'BIZCON 3 – Business Plan Canvas Competition',
    description: 'Business Plan Canvas Competition by BIC empowering student startups.',
    category: 'Competition',
    image: pic6,
  },
  {
    id: 7,
    title: 'Masterclass on SEO & Digital Marketing',
    description: 'Expert session with Dr. Ijaz Ali on modern digital marketing strategies.',
    category: 'Masterclass',
    image: pic7,
  },
  {
    id: 8,
    title: 'E-Commerce Meetup Representation',
    description: 'BIC-AUST Students Represent BIC-AUST at E-Commerce Meetup in Islamabad.',
    category: 'Networking',
    image: pic8,
  },
  {
    id: 9,
    title: 'INNO-VENT Startup Competition',
    description: 'Startup and Business idea competition fostering innovation among students.',
    category: 'Competition',
    image: pic9,
  },
  {
    id: 10,
    title: 'Hult Prize National Summit 2024',
    description: 'AUST Shines at Hult Prize National Summit 2024 with outstanding performance.',
    category: 'Achievement',
    image: pic10,
  },
  {
    id: 11,
    title: 'AI for Startups Workshop',
    description: 'Hands-on workshop exploring AI applications for startup growth and innovation.',
    category: 'Workshop',
    image: pic11,
  },
  {
    id: 12,
    title: 'The Next Gen Session',
    description: 'Interactive session preparing the next generation of entrepreneurs.',
    category: 'Session',
    image: pic12,
  },
  {
    id: 12,
    title: 'The Next Gen Session',
    description: 'Interactive session preparing the next generation of entrepreneurs.',
    category: 'Session',
    image: pic13,
  },
];

const categoryColors: Record<string, string> = {
  Workshop: 'bg-primary/20 text-primary',
  Event: 'bg-secondary/20 text-secondary',
  Initiative: 'bg-accent/20 text-accent',
  Milestone: 'bg-green-500/20 text-green-400',
  Seminar: 'bg-blue-500/20 text-blue-400',
  Competition: 'bg-orange-500/20 text-orange-400',
  Masterclass: 'bg-pink-500/20 text-pink-400',
  Networking: 'bg-yellow-500/20 text-yellow-400',
  Achievement: 'bg-emerald-500/20 text-emerald-400',
  Session: 'bg-indigo-500/20 text-indigo-400',
};

const Activities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <Scene3D className="opacity-40" showGeometry={false} />
        <div className="hero-glow left-1/2 top-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Our <span className="gradient-text glow-text">Activities</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our events, workshops, competitions, and initiatives that empower 
              the entrepreneurial community at AUST.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium z-20 ${categoryColors[activity.category] || 'bg-muted text-muted-foreground'}`}>
                    {activity.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
