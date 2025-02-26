"use client";
import { useGetAllProjectsQuery } from "@/services/projects";
import { RecentProjects, UploadContainer, UserProfile } from "./_components";
import { ProjectChart } from "./_components/project-charts";
import { PackagePlus } from "lucide-react";
import { Button } from "@/components";

export default function Home() {
  const { data: projectData } = useGetAllProjectsQuery();
  return (
    <div className=" relative   ">
     
      <div className="mb-2 ">
        <UserProfile />
      </div>
      <div className="flex  gap-2   ">
        <div
          className={` ${projectData?.length === 20 ? "w-full" : "w-3/4"}  `}
        >
          
            <div>
              <div className="text-sm my-2 ">Recent projects</div>
              <RecentProjects />
            </div>

          <UploadContainer />
          {/* <div className="border rounded-md shadow-sm my-2 dark:border-gray-700 dark:bg-dark-bg-color  w-full h-full flex items-center flex-col gap-3 justify-center">
            <PackagePlus size={60} strokeWidth={1.4} className="text-primary_color" />
            <div className="flex flex-col items-center  gap-2 justify-center">
              <Button size={"sm"}>create project</Button>
              <div className="text-xs">
                create your project width projectly{" "}
              </div>
            </div>
          </div> */}
        </div>

        {projectData?.length === 0 ? (
          " "
        ) : (
          <div className="">
            <div className="text-sm my-2 mt-2  ">Overall percentages</div>
            <div className="h-full">
              <ProjectChart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
