"use client";
import { Button } from "@/components";
import { SkeletonLoader } from "@/components/skeleton-loaders";
import { useGetAllProjectsQuery } from "@/services/projects";
import { PackagePlus } from "lucide-react";
import { RecentProjects, UploadContainer } from "./_components";
import { ProjectChart } from "./_components/project-charts";

export default function Home() {
  const { data: projectData, isFetching, isLoading } = useGetAllProjectsQuery(undefined,{
    skip:false
  });
  
  return (
    <div className=" relative ">
      <div className="mb-2 ">
        <UploadContainer />
      </div>
      <div className="flex  gap-4 back_container dark:back_container_dark bg-white h-[50dvh] flex-col items-start justify-start   py-4 px-10 border  shadow-sm rounded-md  ">
        {projectData?.length === 20 ? (
          <div className="border bg-gray-50 h-full p-4 rounded-md shadow-sm my-2 dark:border-gray-700 dark:bg-dark-bg-color  w-full  flex items-center flex-col gap-3 justify-center">
            <PackagePlus
              size={60}
              strokeWidth={1.4}
              className="text-primary_color"
            />
            <div className="flex flex-col items-center   gap-2 justify-center">
              <Button variant={"outline"} size={"sm"}>
                create project
              </Button>
              <div className="text-xs">create your project with projectly </div>
            </div>
          </div>
        ) : (
          <div>
            {isFetching && isLoading ? (
               <SkeletonLoader/>
            ) : (
              <div className="flex gap-4 justify-center   m-auto  ">
                <div className="w-full">
                  <div>
                    <div className="text-sm my-2  ">Recent projects</div>
                    <RecentProjects />
                  </div>

                  <div className="mt-4">{/* <UploadContainer /> */}</div>
                </div>

                <div className="">
                  <div className="text-sm my-2 mt-2  ">Overall percentages</div>
                  <div className="h-full">
                    <ProjectChart />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
