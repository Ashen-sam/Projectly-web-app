"use client";
import { useGetAllProjectsQuery } from "@/services/projects";
import { Calendar, MonitorSmartphone, TabletSmartphone } from "lucide-react";
import Link from "next/link";

export const RecentProjects = () => {
  const { data: projectData,  } =
    useGetAllProjectsQuery();
  return (
    <div className=" h-[230px] rounded-sm  ">
        <div className="grid  lg:grid-cols-2 grid-cols-1 gap-2  h-auto rounded-sm ">
          {projectData?.slice(0, 4).map((data, index: number) => {
            return (
              <Link key={index} href={`projects/${data.projectid}`}>
                <div className="  group  min-h-[90px] cursor-pointer font-medium box_effect bg-white p-3  flex-1  text-sm ">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-4 ">
                      <div className="w-max p-1 rounded dark:bg-slate-500 bg-slate-100">
                        {data.categoryname === "Web Development" ? (
                          <TabletSmartphone size={17} />
                        ) : (
                          <MonitorSmartphone size={17} />
                        )}
                      </div>
                      <div className="font-semibold sm:text-md">
                        {data.projecttitle}
                      </div>
                    </div>
                    <div
                      className={"px-2 py-1 rounded text-xs text-white"}
                      style={{
                        backgroundColor: `${data.priorityhexcolour}`,
                        border: `${data.priorityhexcolour}`,
                      }}
                    >
                      {data.priorityname}
                    </div>
                  </div>
                  <div className="line-clamp-2 dark:text-zinc-300 w-full  text-[13px] font-normal ">
                    {data.projectdescription}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <div className="text-xs">{data.startdate}</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
    </div>
  );
};
