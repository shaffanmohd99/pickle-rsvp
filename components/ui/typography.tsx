import {cn} from "@/lib/utils";
import {ReactNode} from "react";
type TypographyProps = {
  children: ReactNode;
  className?: string;
  variant?: string;
};

export default function Typography({
  children,
  variant = "p",
  className,
}: TypographyProps) {
  if (variant === "title") {
    return (
      <h1
        className={cn(
          "text-4xl font-semibold tracking-tight lg:text-5xl",
          className
        )}
      >
        {children}
      </h1>
    );
  }
  if (variant === "subtitle") {
    return (
      <h2
        className={cn(
          "lg:text-2xl text-xl font-semibold tracking-tight",
          className
        )}
      >
        {children}
      </h2>
    );
  }
  if (variant === "body") {
    return (
      <h3 className={cn("lg:text-lg  text-md tracking-tight", className)}>
        {children}
      </h3>
    );
  }
  if (variant === "p") {
    return <p className={cn(";lg:text-md text-sm ", className)}>{children}</p>;
  }
  if (variant === "caption") {
    return <p className={cn("lg:text-sm text-xs", className)}>{children}</p>;
  }
}
