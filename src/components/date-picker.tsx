"use client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui";
import React from "react";

interface IDatePicker {
  onDateChange?: (date: Date | null) => void;
}

export const DatePicker: React.FC<IDatePicker> = ({ onDateChange }) => {
  const [date, setDate] = React.useState<Date>();
  const handleSelect = (newDate: Date | undefined) => {
    const dateValue = newDate || null;
    setDate(dateValue!);
    if (onDateChange) {
      onDateChange(dateValue);
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect || undefined}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
