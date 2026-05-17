"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { easeOut } from "@/lib/motion";

type CountUpProps = {
  value: string;
  className?: string;
};

/** Animates leading numbers in stat strings like "4+", "200+", "<15%". */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState(value);

  const match = value.match(/^([<~]?)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2]) : null;
  const suffix = match?.[3] ?? "";

  useEffect(() => {
    if (reduceMotion || target === null || !inView) return;

    const controls = animate(0, target, {
      duration: 1.1,
      ease: easeOut,
      onUpdate: (latest) => {
        const n =
          target < 10
            ? Number(latest.toFixed(1))
            : Math.round(latest);
        setText(`${prefix}${n}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [inView, prefix, suffix, target, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
