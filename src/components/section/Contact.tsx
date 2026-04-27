"use client";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  // Instagram,
  // Facebook,
  // Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      className="py-24 px-6 bg-cream relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-caramel font-bold uppercase tracking-[0.2em] text-sm">
              Get in Touch
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-chocolate mt-4 mb-8">
              Let&apos;s Bake Something <br />
              <span className="text-caramel italic font-serif">Special</span>
            </h2>

            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 border border-beige/30">
                  <Phone className="w-6 h-6 text-caramel" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-chocolate">Call Us</h4>
                  <p className="text-chocolate/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 border border-beige/30">
                  <Mail className="w-6 h-6 text-caramel" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-chocolate">Email Us</h4>
                  <p className="text-chocolate/60">hello@bakemills.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 border border-beige/30">
                  <MapPin className="w-6 h-6 text-caramel" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-chocolate">Visit Us</h4>
                  <p className="text-chocolate/60">
                    123 Bakery Lane, Sweet City, SC 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {/* {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{
                    y: -5,
                    backgroundColor: "#D79A58",
                    color: "#FDFDFD",
                  }}
                  className="w-12 h-12 rounded-full border-2 border-caramel/30 flex items-center justify-center text-caramel transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))} */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-beige/20 relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-chocolate/60 uppercase tracking-wider ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-beige/10 border border-beige/30 rounded-2xl focus:outline-none focus:border-caramel transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-chocolate/60 uppercase tracking-wider ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-beige/10 border border-beige/30 rounded-2xl focus:outline-none focus:border-caramel transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-chocolate/60 uppercase tracking-wider ml-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-6 py-4 bg-beige/10 border border-beige/30 rounded-2xl focus:outline-none focus:border-caramel transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-chocolate/60 uppercase tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your order or inquiry..."
                  className="w-full px-6 py-4 bg-beige/10 border border-beige/30 rounded-2xl focus:outline-none focus:border-caramel transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-chocolate text-cream rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-chocolate/20 hover:bg-chocolate-dark transition-colors"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
