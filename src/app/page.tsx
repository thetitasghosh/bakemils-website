"use client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/section/Navbar";
import Hero from "@/components/section/Hero";
import Products from "@/components/section/Products";
import Dealership from "@/components/section/Dealership";
import Story from "@/components/section/Story";
import Contact from "@/components/section/Contact";
import ThreeScene from "@/components/section/ThreeScene";
// import CustomCursor from "@/components/section/CustomCursor";
// import CollectionPage from "@/components/section/CollectionPage";
import ScrollToTop from "@/components/section/ScrollToTop";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Dealership />
      <Story />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <main className="relative">
        <ThreeScene />
        <Navbar />
        <HomePage />
        <div className="bg-chocolate text-cream py-3 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-[1px]">
          <span>Partnered with over 50+ local cafes and distributors</span>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-caramel transition-colors"
          >
            Become a distributor <span>→</span>
          </a>
        </div>

        <footer className="py-12 px-6 bg-white border-t border-beige/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="size-16 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo-with-white-stroke.png"
                  alt="Bakemills Logo"
                  width={100}
                  height={100}
                  className="object-contain reds "
                />
              </div>
              <span className="text-xl font-display font-black text-chocolate tracking-tighter">
                BAKEMILLS
              </span>
            </div>

            <p className="text-chocolate/40 text-sm font-medium">
              © 2026 Bakemills Bakery. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-chocolate/60 hover:text-caramel transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-chocolate/60 hover:text-caramel transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-chocolate/60 hover:text-caramel transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
