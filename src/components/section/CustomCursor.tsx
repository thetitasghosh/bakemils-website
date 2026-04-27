"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  const ringX = useSpring(cursorX, { damping: 20, stiffness: 250 });
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, [role="button"]',
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed w-2 h-2 bg-caramel rounded-full"
      />

      {/* Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering
            ? "rgba(215, 154, 88, 0.1)"
            : "transparent",
          borderColor: isHovering
            ? "rgba(215, 154, 88, 0.5)"
            : "rgba(110, 57, 63, 0.3)",
        }}
        className="fixed w-10 h-10 border-2 rounded-full transition-colors duration-200"
      />

      {/* Sparkle effect on hover */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="fixed w-12 h-12 bg-caramel/20 blur-xl rounded-full"
        />
      )}
    </div>
  );
}
