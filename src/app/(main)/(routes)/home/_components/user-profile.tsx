"use client";
import { Avatar, Button } from "@/components";
import { UserPen } from "lucide-react";
import Image from "next/image";

import { FunctionComponent } from "react";

interface IUserProfile {
  isOpen?: boolean;
}


export const UserProfile: FunctionComponent<IUserProfile> = ({}) => {

  return (
    <div className="flex  dark:border-gray-700   lg:flex-row flex-col items-center   relative">
      <div className="  flex gap-3 items-center px-4 py-2 w-full ">
        <div className=" rounded-full">
          <div className="border text-lg text-red-500 font-semibold border-red-200 rounded-sm bg-red-50 px-4 py-2">
            A
          </div>
        </div>

        <div className=" w-full  flex justify-between items-center ">
          <div className=" ">
            <div className="text-xl font-bold  text-primary/80">
              Ashen Samarasekera
            </div>
            <div className="text-xs flex items-center gap-2">
             <div className="font-semibold text-primary/60">
              Developer
             </div>
             <div className="font-bold text-primary_color">
              View profile
             </div>
            </div>
           
          </div>
        <div className="flex items-center gap-2">
        <Button
              size={"sm"}
              className=" rounded-sm "
            >
             Add project
            </Button>
            <Button
              size={"sm"}
              className=" rounded-sm "
            >
              <UserPen />
            </Button>
        </div>
        </div>
      </div>
    </div>
  );
};
