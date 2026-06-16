import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-hanji disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-moss text-hanji hover:bg-moss-deep px-7 py-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5",
        outline:
          "border border-moss/30 text-moss hover:border-moss hover:bg-moss/5 px-7 py-3.5",
        ghost: "text-ink hover:bg-ink/5 px-4 py-2",
        link: "text-moss underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "text-sm px-5 py-2.5",
        md: "text-base",
        lg: "text-lg px-9 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

interface LinkButtonProps
  extends Omit<React.ComponentProps<typeof Link>, "className">,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
