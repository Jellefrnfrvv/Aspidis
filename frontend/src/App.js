import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Play, 
  Calendar, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Mail,
  ExternalLink,
  Music,
  Users,
  Camera,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";
import "./App.css";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#music', label: 'Music' },
    { href: '#tour', label: 'Tour' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#merch', label: 'Merch' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold text-metal-red text-glow"
            whileHover={{ scale: 1.05 }}
          >
            ASPIDIS
          </motion.h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-metal-white hover:text-metal-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-metal-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 glass rounded-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-metal-white hover:text-metal-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce')`
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-metal-white mb-6 text-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ASPIDIS
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-metal-white/80 mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Forging the Future of Metal
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <button className="btn-metal flex items-center justify-center gap-2">
            <Play size={20} />
            Listen Now
          </button>
          <button className="btn-metal-outline flex items-center justify-center gap-2">
            <Calendar size={20} />
            Tour Dates
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-metal-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-metal-white mb-6">
            The <span className="text-metal-red">Story</span>
          </h2>
          <p className="text-lg text-metal-white/80 max-w-3xl mx-auto leading-relaxed">
            Born from the depths of creative passion, Aspidis emerged as a force that reshapes the boundaries of metal music. 
            Our sound transcends traditional genres, weaving together brutal intensity with melodic sophistication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1523456752049-9ccb633594bf"
              alt="Band member performing"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-metal-white">Musical Evolution</h3>
            <p className="text-metal-white/80 leading-relaxed">
              Since our formation, we've been pushing the envelope of what metal can be. Our compositions blend 
              crushing riffs with intricate melodies, creating an atmosphere that's both dark and beautiful.
            </p>
            <p className="text-metal-white/80 leading-relaxed">
              Each album represents a chapter in our ongoing evolution, exploring themes of human nature, 
              existentialism, and the raw power of emotion through music.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <Users className="text-metal-red" size={24} />
              <span className="text-metal-white font-semibold">4 Members</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Music Section
const MusicSection = () => {
  const albums = [
    {
      title: "Dark Horizons",
      year: "2024",
      image: "https://images.unsplash.com/photo-1531155733694-ea597ae17818",
      tracks: 10
    },
    {
      title: "Echoes of Thunder",
      year: "2023",
      image: "https://images.unsplash.com/photo-1526933893123-220ba506e809",
      tracks: 8
    },
    {
      title: "Rise of the Serpent",
      year: "2022",
      image: "https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4",
      tracks: 12
    }
  ];

  return (
    <section id="music" className="py-20 bg-metal-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-metal-white mb-6">
            Our <span className="text-metal-red">Music</span>
          </h2>
          <p className="text-lg text-metal-white/80 max-w-3xl mx-auto">
            Explore our discography and immerse yourself in the dark, powerful soundscapes we've crafted.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              className="glass rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={album.image}
                  alt={album.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="text-white" size={48} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-metal-white mb-2">{album.title}</h3>
                <p className="text-metal-white/60 mb-3">{album.year}</p>
                <div className="flex items-center gap-2 text-metal-white/80">
                  <Music size={16} />
                  <span>{album.tracks} tracks</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tour Section
const TourSection = () => {
  const tourDates = [
    { date: "2025-07-15", city: "Los Angeles", venue: "The Wiltern", status: "tickets" },
    { date: "2025-07-22", city: "Chicago", venue: "Metro Chicago", status: "tickets" },
    { date: "2025-07-29", city: "New York", venue: "Webster Hall", status: "sold-out" },
    { date: "2025-08-05", city: "London", venue: "O2 Academy Brixton", status: "tickets" },
    { date: "2025-08-12", city: "Berlin", venue: "SO36", status: "tickets" },
  ];

  return (
    <section id="tour" className="py-20 bg-metal-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-metal-white mb-6">
            Live <span className="text-metal-red">Shows</span>
          </h2>
          <p className="text-lg text-metal-white/80 max-w-3xl mx-auto">
            Experience the raw power of Aspidis live. Join us on our upcoming tour dates.
          </p>
        </motion.div>

        <div className="space-y-4">
          {tourDates.map((show, index) => (
            <motion.div
              key={`${show.date}-${show.city}`}
              className="glass rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2 text-metal-red">
                  <Calendar size={20} />
                  <span className="font-semibold">
                    {new Date(show.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-metal-white">
                  <MapPin size={20} />
                  <span className="font-semibold">{show.city}</span>
                </div>
                <span className="text-metal-white/80">{show.venue}</span>
              </div>
              
              <div>
                {show.status === 'sold-out' ? (
                  <span className="px-4 py-2 bg-metal-red/20 text-metal-red rounded-lg font-semibold">
                    SOLD OUT
                  </span>
                ) : (
                  <motion.button 
                    className="btn-metal-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Tickets
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1516945472-fef9edd66698",
    "https://images.unsplash.com/photo-1547570113-7f81920dc868",
    "https://images.unsplash.com/photo-1534014003122-b516fbde05d5",
    "https://images.unsplash.com/photo-1531155733694-ea597ae17818",
    "https://images.unsplash.com/photo-1526933893123-220ba506e809",
    "https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4"
  ];

  return (
    <section id="gallery" className="py-20 bg-metal-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-metal-white mb-6">
            <span className="text-metal-red">Gallery</span>
          </h2>
          <p className="text-lg text-metal-white/80 max-w-3xl mx-auto">
            Capturing the energy and intensity of our live performances and behind-the-scenes moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Merch Section
const MerchSection = () => {
  const merchItems = [
    {
      name: "Dark Horizons T-Shirt",
      price: "$25",
      image: "https://images.unsplash.com/photo-1531155733694-ea597ae17818"
    },
    {
      name: "Aspidis Logo Hoodie",
      price: "$45",
      image: "https://images.unsplash.com/photo-1526933893123-220ba506e809"
    },
    {
      name: "Limited Edition Vinyl",
      price: "$35",
      image: "https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4"
    }
  ];

  return (
    <section id="merch" className="py-20 bg-metal-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-metal-white mb-6">
            <span className="text-metal-red">Merchandise</span>
          </h2>
          <p className="text-lg text-metal-white/80 max-w-3xl mx-auto">
            Wear your passion. Support the band with our exclusive merchandise collection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="glass rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ShoppingBag className="text-white" size={48} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-metal-white mb-2">{item.name}</h3>
                <p className="text-metal-red text-lg font-semibold mb-4">{item.price}</p>
                <button className="btn-metal w-full">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-metal-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-metal-white mb-6">
            Get In <span className="text-metal-red">Touch</span>
          </h2>
          <p className="text-lg text-metal-white/80 max-w-3xl mx-auto">
            Ready to book Aspidis? Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-metal-white mb-6">Booking Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-metal-red" size={20} />
                  <span className="text-metal-white">booking@aspidis.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="text-metal-red" size={20} />
                  <span className="text-metal-white">Press Kit Available</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-metal-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Youtube, label: "YouTube" }
                ].map(({ icon: Icon, label }) => (
                  <motion.button
                    key={label}
                    className="p-3 glass rounded-lg hover:bg-metal-red transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="text-metal-white" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-xl font-bold text-metal-white mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-metal-dark border border-metal-white/20 rounded-lg text-metal-white placeholder-metal-white/60 focus:border-metal-red focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-metal-dark border border-metal-white/20 rounded-lg text-metal-white placeholder-metal-white/60 focus:border-metal-red focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-metal-dark border border-metal-white/20 rounded-lg text-metal-white placeholder-metal-white/60 focus:border-metal-red focus:outline-none transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="btn-metal w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-metal-gray py-8 border-t border-metal-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-metal-red text-glow">ASPIDIS</h3>
            <p className="text-metal-white/60 mt-1">Forging the Future of Metal</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-metal-white/60 text-sm">
              © 2025 Aspidis. All rights reserved.
            </p>
            <p className="text-metal-white/40 text-xs mt-1">
              Built for the metal community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App bg-metal-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <TourSection />
      <GallerySection />
      <MerchSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
