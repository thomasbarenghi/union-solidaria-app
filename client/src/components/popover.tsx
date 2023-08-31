import React, { useState } from "react";
import { ModalBoxForPopover } from "@/components";

type PopoverProps = {
  children?: React.ReactNode;
  childrenTrigger?: React.ReactNode;
  PopoverBoxClassname?: string;
};

export default function Popover({
  children,
  childrenTrigger,
  PopoverBoxClassname,
}: PopoverProps) {
  const [popVisible, setPopVisible] = useState(false);

  const handleClick = () => {
    setPopVisible(true);
  };

  const handleClose = () => {
    setPopVisible(false);
  };

  return (
    <div onMouseLeave={handleClose} className="relative">
      <div className="flex items-center gap-2" onMouseEnter={handleClick}>
        {childrenTrigger}
      </div>
      {popVisible && (
        <ModalBoxForPopover PopoverBoxClassname={PopoverBoxClassname}>
          {children}
        </ModalBoxForPopover>
      )}
    </div>
  );
}
