import * as React from "react";
import { cn } from "@/lib/utils";

/* Variants */
const buttonVariants = {
  default:
    "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20",
  outline:
    "border border-white/10 text-white hover:bg-white/5",
  ghost:
    "text-gray-300 hover:bg-white/5 hover:text-white",
  secondary:
    "bg-white/10 text-white hover:bg-white/20",
};

/* Sizes */
const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 flex items-center justify-center",
};

const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };