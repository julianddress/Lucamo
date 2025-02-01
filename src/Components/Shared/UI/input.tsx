import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement,React.ComponentProps<"input"> & { variant?: "default" | "outlined" | "filled" | "violet" }>

  (({ className, type, variant = "default", ...props }, ref) => {

  const variantClasses = {
    default: "",
    outlined: " ",
    filled: " ",
    violet: "border border-violet-500 hover:border-violet-600 hover:shadow-md focus-visible:ring-violet-500 focus-visible:ring-2",
  };

  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md px-3 py-1 text-base shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        variantClasses[variant], 
        className 
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
