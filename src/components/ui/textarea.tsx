import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-stroke placeholder:text-inactive aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-12 w-full rounded-md border-2 bg-transparent p-3 transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
