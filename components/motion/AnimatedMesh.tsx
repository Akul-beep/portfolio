"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedMesh() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="bg-mesh" aria-hidden />;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-2] opacity-70"
        aria-hidden
        animate={{
          background: [
            "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(255, 92, 0, 0.07), transparent 55%), radial-gradient(ellipse 55% 40% at 100% 5%, rgba(99, 102, 241, 0.06), transparent 50%)",
            "radial-gradient(ellipse 65% 45% at 15% 10%, rgba(255, 92, 0, 0.05), transparent 50%), radial-gradient(ellipse 50% 45% at 90% 15%, rgba(14, 165, 233, 0.05), transparent 55%)",
            "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(255, 92, 0, 0.07), transparent 55%), radial-gradient(ellipse 55% 40% at 100% 5%, rgba(99, 102, 241, 0.06), transparent 50%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none fixed -left-32 top-1/4 z-[-1] h-72 w-72 rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none fixed -right-24 bottom-1/4 z-[-1] h-80 w-80 rounded-full bg-impact/[0.05] blur-3xl"
        aria-hidden
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
}
