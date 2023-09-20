"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

interface DynamicPopoverProps {
  childrenTrigger: React.ReactNode;
  children: React.ReactNode;
  backdrop: "blur" | "opaque" | "transparent";
}

export default function DynamicPopover({
  childrenTrigger,
  children,
  backdrop,
}: DynamicPopoverProps) {
  return (
    <div className="hidden lg:flex">
      <Popover
        key="backdrop"
        showArrow
        offset={10}
        placement="bottom"
        backdrop={backdrop}
      >
        <PopoverTrigger>{childrenTrigger}</PopoverTrigger>
        <PopoverContent>{children}</PopoverContent>
      </Popover>
    </div>
  );
}
