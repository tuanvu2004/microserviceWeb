"use client"

import * as React from "react"
import { DayPicker, type DayPickerProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      hideWeekdays
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "space-y-4",

        caption: "relative flex justify-center items-center",
        caption_label: "text-sm font-medium",

        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",

        table: "w-full border-collapse table-fixed",

        head_cell:
          "w-9 text-center text-[0.8rem] font-normal text-muted-foreground !table-cell",

        cell:
          "h-9 w-9 p-0 text-center relative !table-cell",

        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),

        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary",

        day_today:
          "bg-accent text-accent-foreground",

        day_outside:
          "text-muted-foreground opacity-50",

        day_disabled:
          "text-muted-foreground opacity-50",

        day_range_start:
          "day-range-start bg-primary text-primary-foreground",

        day_range_end:
          "day-range-end bg-primary text-primary-foreground",

        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",

        day_hidden: "invisible",

        ...classNames,
      }}
      {...props}
    />
  )
}
