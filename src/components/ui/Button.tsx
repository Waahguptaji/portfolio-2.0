import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "solid", ...props }, ref) => {
    const baseStyles = "btn text-base";

    const variantStyles = {
      solid:
        " bg-black dark:bg-white dark:text-black btn btn-neutral w-40 rounded-none text-white",
      outline:
        "bg-transparent border-solid border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-blackbtn bg-transparent border-solid border-black dark:border-white text-base text-black dark:text-white",
    };

    return (
      <button
        className={cn(baseStyles, variantStyles[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
