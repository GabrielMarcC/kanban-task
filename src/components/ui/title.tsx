import { cn } from "@/lib/utils";
import React from "react";

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "font-bold text-black_color dark:text-white  text-[18px] leading-[22px] capitalize",
      className
    )}
    {...props}
  />
));
Title.displayName = "Title";

const SubTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "font-bold text-medium_gray dark:text-white  text-[15px] leading-[18px] capitalize",
      className
    )}
    {...props}
  />
));
SubTitle.displayName = "SubTitle";

export { Title, SubTitle };
