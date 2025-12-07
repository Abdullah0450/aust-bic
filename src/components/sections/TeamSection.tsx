import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const team = [
  {
    name: 'Rashid Mehmood',
    role: 'Manager ORIC',
    email: 'ramehmood@aust.edu.pk',
  },
  {
    name: 'Adeel Shams',
    role: 'Admin Support & IT Officer',
    email: 'adeel.bic@aust.edu.pk',
  },
  {
    name: 'Nabeela Khurshid',
    role: 'Digital Marketing Officer',
    email: 'nabeela.bic@aust.edu.pk',
  },
  {
    name: 'Sumbal Taj',
    role: 'HR & Finance Officer',
    email: 'sunbal.taj@aust.edu.pk',
  },
];

const TeamSection = () => {
  return (
    <section className="py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="section-subheading mx-auto">
            Dedicated professionals committed to nurturing the next generation of entrepreneurs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="team-card"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-6">
                <span className="text-3xl font-heading font-bold gradient-text">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-4">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                {member.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
