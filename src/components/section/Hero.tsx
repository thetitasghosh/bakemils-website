"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1562238525-063f47fd31b2?auto=format&fit=crop&q=80&w=1000",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background Blobs */}
      <div className="blob w-[400px] h-[400px] -top-24 -right-24" />
      <div className="blob w-[300px] h-[300px] bottom-12 -left-24 bg-caramel" />

      {/* Sprinkles */}
      <div className="floating-sprinkle top-[20%] left-[10%]" />
      <div className="floating-sprinkle top-[80%] left-[40%] bg-chocolate" />
      <div className="floating-sprinkle top-[15%] left-[60%] bg-white" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-caramel/10 text-caramel font-medium text-sm mb-6 border border-caramel/20"
          >
            <Star className="w-4 h-4 fill-caramel" />
            <span>Premium Quality</span>
          </motion.div>

          <h1 className="text-6xl md:text-[72px] font-display font-extrabold text-chocolate italic leading-[1.1] mb-6">
            Freshly Baked <br />
            <span className="text-caramel">Happiness.</span>
          </h1>

          <p className="text-lg text-chocolate/80 max-w-[440px] mb-10 leading-relaxed">
            Discover a world of artisanal sweets, handcrafted with premium
            ingredients and a pinch of magic. From velvet cakes to gooey
            brownies.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-chocolate   text-cream rounded-[40px] font-bold flex items-center gap-2 shadow-xl shadow-chocolate/20 hover:bg-chocolate-dark transition-colors uppercase text-[13px] tracking-[1px]"
            >
              Order Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <a href="#products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-chocolate border-2 border-chocolate rounded-[40px] font-bold hover:bg-beige/20 transition-colors uppercase text-[13px] tracking-[1px]"
              >
                View Menu
              </motion.button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full aspect-square max-w-md">
            {/* Decorative circles */}
            <div className="absolute inset-0 bg-caramel/10 rounded-full blur-3xl animate-pulse" />

            <motion.div
              className="relative w-full h-full z-10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Premium Bakery Collection"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover rounded-[80px] shadow-2xl border-8 border-white"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Floating items from Immersive UI design */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl z-20"
              animate={{ y: [0, 15, 0], rotate: [15, 20, 15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🍰
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl z-20"
              animate={{ y: [0, -15, 0], rotate: [-20, -15, -20] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              🧁
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-chocolate/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-chocolate/40 to-transparent" />
      </motion.div>
    </section>
  );
}
