import * as React from "react";
import { cn } from "@/lib/utils";

/* Root */
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

/* Image */
const AvatarImage = React.forwardRef(
  ({ className, src, alt, ...props }, ref) => {
    const [error, setError] = React.useState(false);

    if (!src || error) return null;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        onError={() => setError(true)}
        className={cn("aspect-square h-full w-full object-cover", className)}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

/* Fallback */
const AvatarFallback = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-xl bg-white/10 text-sm font-medium text-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };