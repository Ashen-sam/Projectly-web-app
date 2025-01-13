import React, { ReactNode } from "react";

interface IValidationErrors {
  children: ReactNode;
}

export const ValidationErrors: React.FC<IValidationErrors> = ({ children }) => {
  return <div className="text-[13px] pl-1  text-red-500">{children}</div>;
};
