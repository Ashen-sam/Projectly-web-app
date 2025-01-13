import { ModeToggle } from "@/components";
import React from "react";

interface IHeaderCommon {
  title?: string;
}
export const HeaderCommon: React.FC<IHeaderCommon> = ({ title }) => {
  return (
    <div className="w-full p-2  flex justify-between items-center">
      <div className="text-sm">{title}</div>

      <div>
        <ul className="flex">
          <ModeToggle />

          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </ul>
      </div>
    </div>
  );
};
