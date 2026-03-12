"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  onValueChange,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const isControlled = value !== undefined

  const initialValues = React.useMemo(() => {
    if (isControlled) {
      return value
    }
    if (defaultValue !== undefined) {
      return defaultValue
    }
    return [min, max]
  }, [isControlled, value, defaultValue, min, max])

  const [internalValues, setInternalValues] = React.useState<number[]>(initialValues)

  React.useEffect(() => {
    if (!isControlled) {
      setInternalValues(initialValues)
    }
  }, [isControlled, initialValues])

  const displayValues = isControlled ? value : internalValues

  const handleValueChange = (newValues: number[]) => {
    if (!isControlled) {
      setInternalValues(newValues)
    }
    onValueChange?.(newValues)
  }

  return (
    <div className="w-full">
      <SliderPrimitive.Root
        data-slot="slider"
        defaultValue={defaultValue}
        value={isControlled ? value : internalValues}
        min={min}
        max={max}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
          )}
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className={cn(
              "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
            )}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: displayValues.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Root>
      <div className="flex justify-between mt-2 text-[14px]">
        <span>{displayValues[0]}</span>
        <span>{displayValues[displayValues.length - 1]}</span>
      </div>
    </div>
  )
}

export { Slider }