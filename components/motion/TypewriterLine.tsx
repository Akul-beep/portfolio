"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TypewriterLineProps = {
  phrases: readonly string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
};

export function TypewriterLine({
  phrases,
  className,
  typeSpeed = 40,
  deleteSpeed = 22,
  pauseMs = 2400,
}: TypewriterLineProps) {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState(phrases[0] ?? "");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) {
      setText(phrases[0] ?? "");
      return;
    }

    const phrase = phrases[phraseIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < phrase.length) {
      timeout = setTimeout(
        () => setText(phrase.slice(0, text.length + 1)),
        typeSpeed
      );
    } else if (!deleting && text.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(phrase.slice(0, text.length - 1)),
        deleteSpeed
      );
    } else {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, reduceMotion, typeSpeed, deleteSpeed, pauseMs]);

  return (
    <span className={cn("inline-flex max-w-full items-center", className)}>
      <span className="truncate" aria-live="polite">
        {text}
      </span>
      {!reduceMotion ? (
        <span
          className="typewriter-cursor ml-0.5 inline-block h-[0.9em] w-px shrink-0 bg-accent"
          aria-hidden
        />
      ) : null}
    </span>
  );
}
