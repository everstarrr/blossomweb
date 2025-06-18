import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-inactive border-stroke flex h-12 w-full min-w-0 rounded-[12px] font-light border-2 bg-almost-black px-2.5 py-[13px] transition-[color,box-shadow] outline-none",
        "focus-visible:placeholder:text-white",
        "",
        className
      )}
      {...props}
    />
  );
}

export { Input };
