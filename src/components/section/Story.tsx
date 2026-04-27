"use client";
import { motion } from "motion/react";

export default function Story() {
  return (
    <section
      className="py-24 px-6 bg-beige/20 relative overflow-hidden"
      id="story"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800"
                alt="Our Bakery Kitchen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-caramel/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-chocolate/10 rounded-full blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-12 -right-12 w-48 h-48 z-20 hidden md:block"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  fill="transparent"
                />
                <text className="text-[14px] font-bold uppercase tracking-[0.2em] fill-chocolate">
                  <textPath xlinkHref="#circlePath">
                    Handmade with Love • Premium Quality • Fresh Daily •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-caramel font-bold uppercase tracking-[0.2em] text-sm">
              Our Story
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-chocolate mt-4 mb-8">
              A Passion for <br />
              <span className="text-caramel italic font-serif">Perfection</span>
            </h2>
            <div className="space-y-6 text-lg text-chocolate/70 leading-relaxed">
              <p>
                Founded in 2010, Bakemills started as a small family kitchen
                with a simple dream: to bake the most delicious, high-quality
                treats that bring people together.
              </p>
              <p>
                Today, we continue that tradition by using only the finest
                organic ingredients, traditional baking methods, and a whole lot
                of creativity. Every cake, pastry, and brownie that leaves our
                oven is a testament to our commitment to excellence.
              </p>
              <p>
                We believe that baking is an art form, and our bakers are
                artists dedicated to crafting edible masterpieces that taste as
                good as they look.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-chocolate/10">
              <div>
                <h4 className="text-3xl font-display font-bold text-chocolate">
                  15+
                </h4>
                <p className="text-sm text-chocolate/50 uppercase tracking-wider font-bold">
                  Years
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-chocolate">
                  100%
                </h4>
                <p className="text-sm text-chocolate/50 uppercase tracking-wider font-bold">
                  Natural
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-chocolate">
                  24/7
                </h4>
                <p className="text-sm text-chocolate/50 uppercase tracking-wider font-bold">
                  Fresh
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
