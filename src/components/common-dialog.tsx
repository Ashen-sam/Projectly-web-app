import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui";

interface ICommonDialog {
  DialogHeaderTitle: string;
  children?: ReactNode;
  DialogTitleIcon?: ReactNode;
  className: string;
  buttonText?: string;
  open: boolean;
  close?: () => void;
}

export const CommonDialog: React.FC<ICommonDialog> = ({
  children,
  DialogHeaderTitle,
  className,
  DialogTitleIcon,
  open,
  close,
}) => {
  return (
    <Dialog onOpenChange={close} open={open}>
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
