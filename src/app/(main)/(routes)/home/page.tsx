"use client";
import { Button } from "@/components";
import { PackageOpen, Plus } from "lucide-react";
import { AddProject } from "./_components";
import { UseAddProject } from "./hooks";

export default function Home() {
  const {
    handleCloseProject,
    handleOpenProject,
    isOpenProject,
  } = UseAddProject();

  return (
    <>
      <div className=" relative ">
        {/* <div className="mb-2 ">
        <UserProfile />
      </div> */}
        <div className="min-h-[60vh] flex justify-center rounded-sm items-center">
          <div className="flex flex-col items-center gap-2">
            <PackageOpen
              size={70}
              strokeWidth={1.5}
              className="text-primary_color dark:text-slate-300"
            />

            <div className="text-sm">
              Get started and create your first project.
            </div>
            <Button onClick={handleOpenProject} size={"sm"} variant={"custom_btn"}>
              <Plus />
              Add project
            </Button>
          </div>
        </div>
        {/* {projectData?.length === 20 ? (
        ""
      ) : (
        <div className="flex  gap-4 back_container dark:bg-[#1F1F1F] dark:back_container_dark  bg-white  flex-col items-start justify-start   py-4 px-6 border  shadow-sm rounded-md  ">
          <div className=" w-full">
            <div className="grid grid-cols-1 gap-4 w-full">
              <div className="">
                <div className="text-sm my-2">Recent projects</div>
                <RecentProjects />
                <div className="mt-4">
                  <UploadContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      </div>
      <AddProject open={isOpenProject} close={handleCloseProject} />
    </>
  );
}
