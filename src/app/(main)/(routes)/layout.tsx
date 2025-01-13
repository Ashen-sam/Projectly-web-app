"use client";
import { useState } from "react";
import { HeaderCommon } from "./_components/header-common";
import { HeaderSecondary } from "./_components/header-secondary";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [title] = useState("");
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#0d1117]">
      <div>
        <div className="flex flex-col w-full">
          <div className="dark:bg-[#151b25] ">
            <HeaderCommon title={title} />
            <HeaderSecondary />
          </div>

          <div className=" px-4 items-center mx-auto justify-center w-full max-w-7xl mt-6 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
