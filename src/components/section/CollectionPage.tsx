"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { Search, ArrowLeft, ShoppingCart } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductModal from "@/components/section/ProductModal";
import Image from "next/image";

export default function CollectionProductPage() {
  const params = useParams();
  const category = params.id as "cakes" | "pastries" | "brownies";

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "price-low" | "price-high">(
    "newest",
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          p.category === category &&
          p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        return 0;
      });
  }, [category, searchQuery, sortBy]);

  // 🔥 dynamic title based on category
  const titleMap = {
    cakes: "Our Cake Collection",
    pastries: "Fresh Pastry Collection",
    brownies: "Brownie Bliss Collection",
  };

  const subtitleMap = {
    cakes: "Freshly baked cakes crafted for celebrations.",
    pastries: "Delicate pastries made with perfection.",
    brownies: "Dense, indulgent brownies for chocolate lovers.",
  };
  const heroImageMap = {
    cakes:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000",
    pastries:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=1000",
    brownies:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1000",
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-chocolate/40" />
        <img
          src={heroImageMap[category]}
          alt={titleMap[category]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cream/80 hover:text-cream mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-6xl md:text-8xl font-display text-cream italic">
            {titleMap[category]}
          </h1>

          <p className="text-xl text-cream/80 mt-4">{subtitleMap[category]}</p>
        </div>
      </section>

      {/* TOOLBAR */}
      <section className="sticky top-0 z-40 bg-cream/80 backdrop-blur border-b border-beige/20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex  md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-chocolate/40" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 border rounded-2xl"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "newest" | "price-low" | "price-high")
            }
            className=" py-3 border rounded-2xl"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Low → High</option>
            <option value="price-high">High → Low</option>
          </select>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 shadow-xl bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/10 transition-colors" />
                <div className="absolute bottom-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-chocolate hover:bg-caramel hover:text-white transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-chocolate mb-1 group-hover:text-caramel transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-chocolate/50 mb-3 line-clamp-1">
                {product.description}
              </p>
              <span className="text-2xl font-display font-bold text-chocolate">
                INR {product.price}
              </span>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center py-20 text-chocolate/40">
            No products found
          </p>
        )}
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
