"use client";
import { HeaderCommon, HeaderSecondary } from "./_components";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen ">
      <div>
        <div className="flex flex-col w-full">
          <div className="dark:bg-dark-bg-color ">
            <HeaderCommon />
            <HeaderSecondary />
          </div>
          <div className="bg-slate-50 dark:bg-[#1F1F1F]  h-[95dvh]">
            <div className=" px-4 items-center mx-auto justify-center w-full max-w-7xl mt-6 ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
