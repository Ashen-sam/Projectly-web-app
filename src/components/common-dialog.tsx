import React, { ReactNode } from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui";

interface ICommonDialog {
  DialogHeaderTitle: string;
  children?: ReactNode;
  DialogTitleIcon?: ReactNode;
  className: string;
  buttonText: string;
  open: boolean;
}

export const CommonDialog: React.FC<ICommonDialog> = ({
  children,
  DialogHeaderTitle,
  className,
  buttonText,
  DialogTitleIcon,
  open,
}) => {
  return (
    <Dialog open={open}>
      <DialogTrigger className="text-[12px] border-2 border-[#1877F2] text-white px-2 py-1 rounded bg-[#1E90FF]">
        {buttonText}
      </DialogTrigger>
      <DialogContent
        className={`${className} dark:bg-[#171717]`}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-md flex gap-2 items-center">
            {DialogTitleIcon}
            {DialogHeaderTitle}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
