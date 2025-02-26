import React, { ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "./ui";

interface ICommonDialog {
  DialogHeaderTitle: string;
  children?: ReactNode;
  DialogTitleIcon?: ReactNode;
  className: string;
  buttonText: string;
  open: boolean;
  onClose: () => void;
}

export const AddProject: React.FC<ICommonDialog> = ({
  DialogHeaderTitle,
  className,
  DialogTitleIcon,
  open,
  onClose,
}) => {
  const data= [
    {
      name: "asdas",
      category: "asdasda[123123",
    },
    {
      name: "asdlajsdjadks",
      category: "poppp[123123",
    },
  ];
  return (
    <Dialog open={open} onOpenChange={onClose}>
    <DialogContent>
      <DialogTitle>
        asd
      </DialogTitle>
      <DialogFooter>
        askjdha
      </DialogFooter>
    </DialogContent>
    </Dialog>
  );
};
