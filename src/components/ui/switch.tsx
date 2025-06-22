"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-background-2 ring-0 data-[state=unchecked]:bg-white inline-flex h-10 w-[87px] shrink-0 items-center rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "data-[state=checked]:bg-white data-[state=unchecked]:bg-background pointer-events-none block size-[33px] rounded-full transition-transform data-[state=checked]:translate-x-[51px] data-[state=unchecked]:translate-x-[3px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
