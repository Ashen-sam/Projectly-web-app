import React from "react";
import { Skeleton } from "./ui";

export const SkeletonLoader = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col gap-2 mt-4 min-h-[500px]">
      <Skeleton className="w-[90px] h-[15px]" />
      <Skeleton className="w-[200px] h-[15px]" />
      <Skeleton className="w-[280px] h-[15px]" />
      <Skeleton className="w-[100px] h-[15px]" />
    </div>
  );
};
