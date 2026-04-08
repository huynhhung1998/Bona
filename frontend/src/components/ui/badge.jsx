import * as React from "react";
import { cn } from "@/lib/utils";

/* Variants */
const badgeVariants = {
  default: "bg-red-600 text-white",
  secondary: "bg-white/10 text-white",
  outline: "border border-white/10 text-gray-300",
  success: "bg-green-600/20 text-green-400",
  warning: "bg-yellow-500/20 text-yellow-400",
  destructive: "bg-red-500/20 text-red-400",
};

/* Component */
function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium tracking-wide transition",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };