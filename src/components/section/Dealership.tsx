"use client";
import { motion } from "motion/react";
import { Truck, Store, Users, CheckCircle2 } from "lucide-react";

const benefits = [
  "Bulk Supply for Cafés & Hotels",
  "Custom Branding & Packaging",
  "Reliable Daily Distribution",
  "Premium Quality Assurance",
];

export default function Dealership() {
  return (
    <section
      className="py-24 px-6 bg-chocolate text-cream overflow-hidden relative"
      id="partnerships"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-caramel/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-caramel font-bold uppercase tracking-[0.2em] text-sm">
            Partnerships
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-extrabold mt-4 mb-8">
            Grow Your Business <br /> with Bakemills
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-xl leading-relaxed">
            Join our network of successful distributors and café partners. We
            provide premium bakery products, reliable logistics, and dedicated
            support to help you deliver happiness to your customers.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-caramel flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-caramel text-chocolate rounded-full font-bold text-lg shadow-2xl shadow-caramel/20 hover:bg-caramel-light transition-colors"
            >
              Become a Partner
            </motion.button>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[40px] border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-caramel/20 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-caramel" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-sm text-cream/50">
                Fresh products delivered to your doorstep every morning.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[40px] border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-caramel/20 rounded-2xl flex items-center justify-center mb-6">
                <Store className="w-8 h-8 text-caramel" />
              </div>
              <h3 className="text-xl font-bold mb-2">Café Supply</h3>
              <p className="text-sm text-cream/50">
                Customized menu options for your café or restaurant.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mt-12"
          >
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[40px] border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-caramel/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-caramel" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reseller Program</h3>
              <p className="text-sm text-cream/50">
                Attractive margins and marketing support for retailers.
              </p>
            </div>
            <div className="bg-caramel p-8 rounded-[40px] flex flex-col items-center text-center text-chocolate">
              <h4 className="text-4xl font-display font-black mb-2">50+</h4>
              <p className="text-sm font-bold uppercase tracking-wider">
                Active Partners
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
