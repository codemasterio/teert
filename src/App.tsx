import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { SplineScene } from './components/ui/splite';
import { Card } from './components/ui/card';
import { Spotlight } from './components/ui/spotlight';
import { Instagram, Facebook, Mail, Camera, Heart, Share2, Eye } from 'lucide-react';
import { AnimatedTestimonials } from './components/ui/animated-testimonials';
import './styles/custom.css';

const INSTAGRAM_URL = "https://www.instagram.com/teertha_photography";

const portfolioItems = [
  {
    id: 1,
    title: "Wedding Photography",
    category: "Wedding",
    description: "Capturing beautiful moments of your special day",
    image: "/images/WhatsApp Image 2024-11-25 at 10.32.13 PM.jpeg",
    icons: [
      { icon: Heart, label: "Like", action: "like" },
      { icon: Share2, label: "Share", action: "share" },
      { icon: Instagram, label: "View on Instagram", action: "instagram" }
    ]
  },
  {
    id: 2,
    title: "Pre-Wedding Moments",
    category: "Pre-Wedding",
    description: "Romantic pre-wedding photoshoots",
    image: "/images/Prewedding.jpg",
    icons: [
      { icon: Heart, label: "Like", action: "like" },
      { icon: Share2, label: "Share", action: "share" },
      { icon: Instagram, label: "View on Instagram", action: "instagram" }
    ]
  },
  {
    id: 3,
    title: "Baby Photography",
    category: "Baby Shoots",
    description: "Adorable baby photoshoots",
    image: "/images/babyyyy.jpg",
    icons: [
      { icon: Heart, label: "Like", action: "like" },
      { icon: Share2, label: "Share", action: "share" },
      { icon: Instagram, label: "View on Instagram", action: "instagram" }
    ]
  },
  {
    id: 4,
    title: "Portrait Photography",
    category: "Portrait",
    description: "Professional portrait photography",
    image: "/images/Anush.png",
    icons: [
      { icon: Heart, label: "Like", action: "like" },
      { icon: Share2, label: "Share", action: "share" },
      { icon: Instagram, label: "View on Instagram", action: "instagram" }
    ]
  },
  {
    id: 5,
    title: "Maternity Photography",
    category: "Maternity",
    description: "Beautiful maternity photoshoots capturing the journey of motherhood",
    image: "/images/Maternity.jpg",
    icons: [
      { icon: Heart, label: "Like", action: "like" },
      { icon: Share2, label: "Share", action: "share" },
      { icon: Instagram, label: "View on Instagram", action: "instagram" }
    ]
  },
  {
    id: 6,
    title: "Mehandi Photography",
    category: "Mehandi",
    description: "Capturing the intricate art of mehandi and celebrations",
    image: "/images/Mehandi.jpeg",
    icons: [
      { icon: Heart, label: "Like", action: "like" },
      { icon: Share2, label: "Share", action: "share" },
      { icon: Instagram, label: "View on Instagram", action: "instagram" }
    ]
  },
  {
    id: 7,
    title: "Family Photography",
    category: "Family",
    description: "Beautiful family portraits",
    image: "/images/Fam.jpg",
    icons: [
      { icon: Heart, label: "Like", action: "like" },
      { icon: Share2, label: "Share", action: "share" },
      { icon: Instagram, label: "View on Instagram", action: "instagram" }
    ]
  }
];

const testimonials = [
  {
    quote: "Teertha Photography captured our special moments beautifully. Every photo tells a story and brings back wonderful memories. Highly recommended!",
    name: "Mani & Shwetha",
    designation: "Wedding Client",
    src: "/images/Mani.JPG"
  },
  {
    quote: "Amazing experience with Teertha Photography! The pre-wedding shoot was fantastic, and the photos turned out perfect.",
    name: "Bharath & Nikita",
    designation: "Pre-Wedding Client",
    src: "/images/pre.jpg"
  },
  {
    quote: "Professional service and stunning photos! Really captured the essence of our family moments.",
    name: "Amrutha",
    designation: "Family Photoshoot Client",
    src: "/images/FAMILLLL.jpg"
  }
];

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-black to-black min-h-screen text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-full">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text bg-size-200 bg-pos-0 animate-gradient"
              >
                Teertha Photography
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-purple-200 max-w-lg text-xl"
              >
                Capturing life's precious moments with artistry and emotion
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex gap-4"
              >
                <a 
                  href="https://www.instagram.com/teertha_photography" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/teertha_photography" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm"
              onClick={() => window.open(INSTAGRAM_URL, '_blank')}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 mb-4">{item.description}</p>
                    <div className="flex gap-4">
                      {item.icons.map((icon, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-white/90 hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            switch (icon.action) {
                              case 'like':
                                // You can implement like functionality here
                                break;
                              case 'share':
                                if (navigator.share) {
                                  navigator.share({
                                    title: item.title,
                                    text: item.description,
                                    url: INSTAGRAM_URL
                                  });
                                } else {
                                  window.open(INSTAGRAM_URL, '_blank');
                                }
                                break;
                              case 'instagram':
                                window.open(INSTAGRAM_URL, '_blank');
                                break;
                            }
                          }}
                          title={icon.label}
                        >
                          <icon.icon className="h-6 w-6" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">About Me</h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-6">
                Welcome to Teertha Photography, where every frame tells a story! We are passionate about capturing life's most precious moments with creativity and elegance. Whether it's the joy of a wedding, the excitement of a pre-wedding shoot, the warmth of a maternity session, or the innocence of a baby's first milestones, we bring your memories to life through our lens.
              </p>
              <p className="text-purple-200 text-lg leading-relaxed mb-6">
                With a keen eye for detail and a love for storytelling, we ensure that every photograph reflects genuine emotions and timeless beauty. Based in Banavasi, Sirsi (TQ), Uttara Kannada District, we are committed to delivering high-quality photography services tailored to your special moments.
              </p>
              <p className="text-purple-200 text-lg leading-relaxed">
                Let's create memories that last forever 📸✨
              </p>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/teerthap.jpg"
                  alt="Teertha - Professional Photographer"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-purple-900/90 backdrop-blur-sm p-4 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-white mb-1">Teertha</h3>
                <p className="text-purple-200">Professional Photographer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-purple-900/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
        >
          Client Stories
        </motion.h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-8"
          >
            <a
              href="https://www.instagram.com/teertha_photography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition-colors"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://www.instagram.com/teertha_photography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition-colors"
            >
              <Facebook size={32} />
            </a>
            <a
              href="mailto:contact@teerthaphotography.com"
              className="text-purple-300 hover:text-purple-400 transition-colors"
            >
              <Mail size={32} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;