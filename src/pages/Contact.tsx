import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Scene3D from "@/components/three/Scene3D";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm, getWhatsAppLink } from "@/lib/contactService";
import contact from '@/assets/contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast.success(
          "Message sent successfully! We will get back to you soon."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else if (result.whatsappLink) {
        // Show error but offer WhatsApp as fallback
        toast.error(result.error || "Email service unavailable");
        // Open WhatsApp after a short delay
        setTimeout(() => {
          window.open(result.whatsappLink, "_blank");
          toast.info("Opening WhatsApp to contact us directly");
        }, 1000);
      } else {
        toast.error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={contact} 
            alt="Contact" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <Scene3D className="opacity-40" showGeometry={false} />
        <div className="hero-glow right-0 bottom-0" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Contact <span className="gradient-text glow-text">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions or ready to start your entrepreneurial journey? Get
              in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10"
            >
              <h2 className="font-heading font-semibold text-2xl mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us about your idea or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    window.open(getWhatsAppLink(formData), "_blank")
                  }
                  className="btn-outline w-full group flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading font-semibold text-2xl mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We'd love to hear from you! Whether you have a question about
                  our programs, want to apply for incubation, or just want to
                  say hello, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "Abbottabad University of Science & Technology, Havelian, Abbottabad, Pakistan",
                  },
                  { icon: Mail, label: "Email", value: "bic@aust.edu.pk" },
                  { icon: Phone, label: "Phone", value: "+92 992922554" },
                  { icon: Phone, label: "Phone", value: "+92 3333388128" },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    value: "Monday - Friday: 9:00 AM - 5:00 PM",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-card p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.label}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Map */}
              <div className="glass h-80 w-full overflow-hidden rounded-2xl relative z-10 border border-white/10 group">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
