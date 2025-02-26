import { ModeToggle } from "@/components";
import React, { FunctionComponent } from "react";

export const HeaderCommon: FunctionComponent = () => {

  return (
    <div className="w-full  p-2  flex justify-between items-center">
      <div  className="flex">
          <ModeToggle />
      </div>
    </div>
  );
};
