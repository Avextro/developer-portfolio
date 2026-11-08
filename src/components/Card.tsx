import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

function Card({ children, className = "", padding = "md" }: CardProps) {
  return (
    <article
      className={`rounded-xl m-2 border-2 border-border bg-surface ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </article>
  );
}

export default Card;
