"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, LayoutGrid, Tablet } from "lucide-react";
import Link from "next/link";
// import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    title: "Our Cake Collection",
    shortTitle: "Cake",
    subtitle: "Freshly baked cakes crafted for celebrations and sweet moments.",
    description:
      "Elegant, multi-layered masterpieces crafted with our signature recipes and a whole lot of love.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1600",
    slug: "cakes",
  },
  {
    id: 2,
    title: "Fresh Pastry Collection",
    shortTitle: "Pastries",
    subtitle: "Artisanal pastries made with premium butter and love.",
    description:
      "Flaky, buttery delights baked fresh every morning using traditional French techniques.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1600",
    slug: "pastries",
  },
  {
    id: 3,
    title: "Brownie Bliss Collection",
    shortTitle: "Brownies",
    subtitle: "Intensely chocolatey and fudgy brownies for every mood.",
    description:
      "Dense, decadent brownies loaded with premium dark chocolate and balanced with sea salt.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1600",
    slug: "brownies",
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"banner" | "grid">("banner");

  useEffect(() => {
    if (viewMode === "banner") {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % collections.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [viewMode]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % collections.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + collections.length) % collections.length,
    );

  return (
    <section className="py-24 px-6 bg-[#FEF9F6] relative" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Toggle */}
        <div className="relative flex flex-col items-center mb-12">
          {/* Header Text */}
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D79A58] font-bold uppercase tracking-[0.3em] text-[13px]"
            >
              OUR COLLECTIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-extrabold text-[#4A2C2A] mt-3"
            >
              Sweetness in Every Bite
            </motion.h2>
          </div>

          {/* View Toggle Button - Positioned in the upper right of the container */}
          <div className="absolute top-0 right-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setViewMode(viewMode === "banner" ? "grid" : "banner")
              }
              className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-[#D79A58]/20 text-[#4A2C2A] font-bold text-sm hover:bg-[#D79A58]/5 transition-colors"
            >
              {viewMode === "banner" ? (
                <>
                  <LayoutGrid className="w-4 h-4 text-[#D79A58]" />
                  Grid View
                </>
              ) : (
                <>
                  <Tablet className="w-4 h-4 text-[#D79A58] rotate-90" />
                  Banner View
                </>
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === "banner" ? (
            /* Carousel / Banner Mode */
            <motion.div
              key="banner"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-[40px] shadow-2xl aspect-[21/9] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                      src={collections[currentIndex].image}
                      alt={collections[currentIndex].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-display font-extrabold text-white mb-4 drop-shadow-lg"
                      >
                        {collections[currentIndex].title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/90 text-[14px] md:text-lg max-w-xl mb-8 font-medium"
                      >
                        {collections[currentIndex].subtitle}
                      </motion.p>
                      <Link
                        href={`/collections/${collections[currentIndex].slug}`}
                      >
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-10 py-3.5 bg-[#D79A58] text-white rounded-full font-display font-bold italic text-lg shadow-xl hover:bg-[#C2894D] transition-colors"
                        >
                          Explore All
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
                >
                  <ChevronRight size={48} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                  {collections.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Grid / Card Mode - Matches User Mockup */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#4A2C2A] rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
                >
                  {/* Top Image Part */}
                  <div className="bg-[#D79A58] p-6 pb-0">
                    <div className="relative aspect-[4/3] rounded-[30px] overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold text-lg">
                          Product Picture
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Text Part */}
                  <div className="p-8 pb-10 flex flex-col h-full">
                    <h3 className="text-4xl font-display font-extrabold text-white mb-4">
                      {collection.shortTitle}
                    </h3>
                    <p className="text-white/70 text-sm mb-8 flex-grow leading-relaxed">
                      {collection.description}
                    </p>
                    <Link href={`/collections/${collection.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 bg-white text-[#4A2C2A] rounded-full font-display font-bold text-lg shadow-lg hover:bg-cream transition-colors"
                      >
                        Explore
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
