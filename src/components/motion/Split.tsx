import React from "react";

/**
 * Server-renderable split text. Words are wrapped in masks so MotionProvider
 * (or the hero) can slide them up.
 *
 * Markup inside `text`:
 *   "\n"     line break
 *   *word*   outlined word
 *   _word_   lime highlighted word
 *   ~word~   muted word
 */
export function Split({
  text,
  as: Tag = "h2",
  className = "",
  mode = "scroll",
}: {
  text: string;
  as?: React.ElementType;
  className?: string;
  mode?: "scroll" | "hero";
}) {
  const lines = text.split("\n");
  return (
    <Tag className={className} data-split={mode === "hero" ? "hero" : ""} aria-label={text.replace(/[*_~]/g, "").replace(/\n/g, " ")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").filter(Boolean).map((raw, wi) => {
            let word = raw;
            let cls = "";
            if (/^\*.*\*[.,!?]?$/.test(word)) {
              cls = "text-outline";
              word = word.replace(/\*/g, "");
            } else if (/^_.*_[.,!?]?$/.test(word)) {
              cls = "bg-lime px-[0.12em] rounded-[0.12em]";
              word = word.replace(/_/g, "");
            } else if (/^~.*~[.,!?]?$/.test(word)) {
              cls = "text-muted";
              word = word.replace(/~/g, "");
            }
            return (
              <React.Fragment key={wi}>
                <span className="split-line">
                  <span className={`split-word ${cls}`}>{word}</span>
                </span>{" "}
              </React.Fragment>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
