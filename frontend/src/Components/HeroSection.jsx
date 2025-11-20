import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselSlides = [
  {
    image: "https://i.pinimg.com/1200x/18/31/8e/18318ed9256de35d765964eb62d4bf26.jpg",
    text: "Your Trusted Logistics Partner"
  },
  {
    image: "https://i.pinimg.com/736x/38/59/30/38593081598d640c22f8ca34b6739e11.jpg",
    text: "Delivering Excellence, Every Time"
  },
  {
    image: "https://www.pratikgroup.co.in/assets/images/header-img-2.jpg",
    text: "Global Reach, Local Expertise"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % carouselSlides.length;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const next = () => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);

  return (
    <div className="bg-[#F9FAFB] px-0 py-0">
  
      {/* Carousel Section */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={carouselSlides[currentSlide].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              key={currentSlide + 'text'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl font-bold mb-4"
            >
              {carouselSlides[currentSlide].text}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-2xl max-w-2xl mx-auto"
            >
              Custom Clearance
            </motion.p>
          </div>
        </div>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}