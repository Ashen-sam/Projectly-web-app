"use client";
import { Button } from "@/components";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { projectsData } from "./projects";

export default function RecentProjects() {
  return (
    <div className="">
      {projectsData.length === 0 ? (
        ""
      ) : (
        <div className="my-2 flex items-center gap-2 font-semibold bg-zinc-100 dark:bg-primary/10 dark:border-zinc-500 px-3 py-1 rounded text-xs border w-max">
          <Clock size={15} />
          <div className="dark:text-red">Recently visited</div>
        </div>
      )}

      <div
        className={` md:max-h-[280px]  ${
          projectsData.length === 0 ? "" : "max-h-[460px] overflow-y-auto"
        }   `}
      >
        {projectsData.length === 0 ? (
          <div className="flex justify-center items-center w-full  min-h-[900px]">
            <div className="min-w-[300px] min-h-[200px] flex items-center flex-col justify-center ">
              <Image
                alt="sd"
                src={"/idea-launch.svg"}
                height={400}
                width={350}
              />
              <Button>Create project</Button>
            </div>
          </div>
        ) : (
          <div className="grid  xl:grid-cols-3 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 h-full  ">
            {projectsData?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="rounded-md dark:border dark:border-gray-700 dark:bg-[#151b25] hover:bg-secondary/70 dark:hover:bg-secondary/20 font-medium shadow-sm border p-3  flex-1  text-sm"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold">{data.projectName}</div>
                    {/* <div
                      className={"px-2 py-1 rounded text-xs text-white"}
                      style={{ backgroundColor: `${data.statusColor}` }}
                    >
                      {data.projectPriority}
                    </div> */}
                  </div>
                  <div className="line-clamp-2 mt-1 dark:text-zinc-300  text-xs">
                    {data.projectShortDesc}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <div className="text-xs">{data.projectDate}</div>
                    </div>
                    <Button className="text-xs" size={"sm"}>
                      Work
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
