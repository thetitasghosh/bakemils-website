"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Star,
  MessageSquarePlus,
  Send,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Product } from "@/data/products";

const SHOP_PHONE = "+1234567890"; // Example phone number
const SHOP_WHATSAPP = "1234567890"; // Example WhatsApp number (just digits)

const initialReviews = [
  {
    id: 1,
    user: "Elena G.",
    rating: 5,
    comment: "Absolutely divine! The flavors are so balanced.",
    avatar: "EG",
  },
  {
    id: 2,
    user: "Marcus R.",
    rating: 4,
    comment: "Fresh and delicious. Highly recommend for any occasion.",
    avatar: "MR",
  },
  {
    id: 3,
    user: "Sarah L.",
    rating: 5,
    comment: "Best I've ever had. Truly artisanal quality.",
    avatar: "SL",
  },
];

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [reviews, setReviews] = useState(initialReviews);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  if (!product) return null;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const reviewToAdd = {
      id: Date.now(),
      user: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      avatar:
        newReview.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .substring(0, 2) || "??",
    };

    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ name: "", rating: 5, comment: "" });
    setIsReviewFormOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      >
        <div
          className="absolute inset-0 bg-chocolate/40 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-cream rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-chocolate hover:bg-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col md:max-h-[90vh] h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-caramel font-bold uppercase tracking-widest text-xs">
                {product.category}
              </span>
              <div className="flex items-center gap-1 bg-caramel/10 px-2 py-1 rounded-lg">
                <Star className="w-3 h-3 fill-caramel text-caramel" />
                <span className="text-xs font-bold text-caramel">
                  4.9 (120+)
                </span>
              </div>
            </div>

            <h2 className="text-4xl font-display font-bold text-chocolate mb-4">
              {product.name}
            </h2>
            <p className="text-chocolate/60 mb-8 leading-relaxed">
              {product.description}
            </p>

            {product.ingredients && (
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-chocolate/40 mb-3">
                  Ingredients
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1 bg-beige/20 rounded-full text-xs font-medium text-chocolate/70"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.sizes && (
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-chocolate/40 mb-3">
                  Available Sizes
                </h4>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-beige/40 rounded-xl text-sm hover:border-caramel hover:text-caramel transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ratings & Reviews Section */}
            <div className="mb-8 pt-6 border-t border-beige/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-chocolate/40 ">
                  Customer Reviews
                </h4>
                <button
                  onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
                  className="text-xs font-bold text-caramel flex items-center gap-1 hover:underline"
                >
                  <MessageSquarePlus className="w-3.5 h-3.5" />
                  Write a review
                </button>
              </div>

              <AnimatePresence>
                {isReviewFormOpen && (
                  <motion.form
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    onSubmit={handleReviewSubmit}
                    className="mb-8 p-6 bg-caramel/5 rounded-3xl border border-caramel/20 overflow-hidden"
                  >
                    <div className="grid gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full bg-white border border-beige/40 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-caramel"
                        value={newReview.name}
                        onChange={(e) =>
                          setNewReview({ ...newReview, name: e.target.value })
                        }
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-chocolate/40 uppercase">
                          Rating:
                        </span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() =>
                                setNewReview({ ...newReview, rating: star })
                              }
                            >
                              <Star
                                className={`w-4 h-4 ${star <= newReview.rating ? "fill-caramel text-caramel" : "text-chocolate/10"}`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <textarea
                        placeholder="Share your thoughts..."
                        required
                        rows={3}
                        className="w-full bg-white border border-beige/40 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-caramel resize-none"
                        value={newReview.comment}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            comment: e.target.value,
                          })
                        }
                      />
                      <button
                        type="submit"
                        className="w-full py-3 bg-chocolate text-cream rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-chocolate-dark transition-colors"
                      >
                        <Send className="w-4 h-4" />
                        Submit Review
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex gap-4 p-4 bg-beige/5 rounded-2xl border border-beige/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-chocolate/5 flex items-center justify-center font-bold text-chocolate/40 text-xs shrink-0 lowercase">
                      {review.avatar}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-chocolate">
                          {review.user}
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < review.rating ? "fill-caramel text-caramel" : "text-chocolate/10"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-chocolate/60 leading-snug">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-beige/20 flex items-center justify-between gap-6 bg-cream/80 backdrop-blur-md sticky bottom-0 -mx-8 -mb-8 p-8">
              <div>
                <span className="text-sm text-chocolate/40 block">Price</span>
                <span className="text-3xl font-display font-bold text-chocolate">
                  ${product.price}
                </span>
              </div>

              <div className="flex gap-3 flex-grow">
                <a
                  href={`tel:${SHOP_PHONE}`}
                  className="flex-1 py-4 bg-chocolate text-cream rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-chocolate-dark transition-colors text-center"
                >
                  <Phone className="w-5 h-5" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(`Hi Bakemills! I'd like to order the ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
