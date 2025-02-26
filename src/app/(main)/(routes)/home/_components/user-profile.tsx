"use client";
import { Button } from "@/components";
import { UserPen } from "lucide-react";
import Image from "next/image";

import { FunctionComponent } from "react";

interface IUserProfile {
  isOpen?: boolean;
}


export const UserProfile: FunctionComponent<IUserProfile> = ({}) => {

  return (
    <div className="flex bg-white dark:border-gray-700 dark:bg-dark-bg-color  lg:flex-row flex-col border rounded-sm shadow-sm relative">
      <div className=" lg:w-1/3  flex gap-3 items-center px-4 py-2 ">
        <div className=" rounded-full">
          <Image
            className="dark:hidden object-contain "
            alt="engineer"
            height={100}
            width={100}
            src={"/engineer.svg"}
          />
          <Image
            className="dark:block hidden  object-contain"
            alt="engineer"
            height={100}
            width={100}
            src={"/engineer-dark.svg"}
          />
        </div>

        <div className="mb-3 w-full ">
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
            <Button
              size={"sm"}
              className="absolute -top-1 right-1 rounded-sm mt-2 "
            >
              <UserPen />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
