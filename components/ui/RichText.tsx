import { Fragment } from "react";

/** Renders strings with **bold** markers as <strong>. */
export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </span>
  );
}
