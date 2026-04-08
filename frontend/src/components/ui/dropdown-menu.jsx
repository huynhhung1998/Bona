import * as React from "react";
import { cn } from "@/lib/utils";

/* Root */
const DropdownMenu = ({ children }) => {
  return <div className="relative inline-block">{children}</div>;
};

/* Trigger */
const DropdownMenuTrigger = ({ children, className, ...props }) => {
  return (
    <div className={cn("cursor-pointer", className)} {...props}>
      {children}
    </div>
  );
};

/* Content */
const DropdownMenuContent = ({
  children,
  className,
  align = "right",
}) => {
  return (
    <div
      className={cn(
        "absolute z-50 mt-2 min-w-[180px] rounded-xl border border-white/10 bg-[#141416] shadow-lg p-1 animate-in fade-in zoom-in-95",
        align === "right" ? "right-0" : "left-0",
        className
      )}
    >
      {children}
    </div>
  );
};

/* Label */
const DropdownMenuLabel = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "px-3 py-2 text-xs text-gray-400 font-medium",
        className
      )}
      {...props}
    />
  );
};

/* Item */
const DropdownMenuItem = ({
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-lg cursor-pointer",
        "hover:bg-white/5 hover:text-white transition",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/* Separator */
const DropdownMenuSeparator = ({ className }) => {
  return (
    <div
      className={cn("my-1 h-px bg-white/10", className)}
    />
  );
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};