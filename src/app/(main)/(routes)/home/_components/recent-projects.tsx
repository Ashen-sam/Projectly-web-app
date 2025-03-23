"use client";
import { useGetAllProjectsQuery } from "@/services/projects";
import { Calendar, MonitorSmartphone, TabletSmartphone } from "lucide-react";
import Link from "next/link";

export const RecentProjects = () => {
  const { data: projectData } = useGetAllProjectsQuery();
  return (
    <div className=" rounded-sm   ">
      <div className="grid  lg:grid-cols-2 grid-cols-1 gap-2  h-auto rounded-sm ">
        {projectData?.slice(0, 6).map((data, index: number) => {
          return (
            <Link key={index} href={`projects/${data.projectid}`}>
              <div className="  group  min-h-[90px] cursor-pointer font-medium box_effect  bg-white   flex-1  text-sm ">
                <div className="flex justify-between items-center bg-[#f8f9fa] rounded-t-sm dark:bg-slate-700 p-1 border-b border-b-slate-200 dark:border-b-0   mb-2">
                  <div className="flex items-center gap-4 ">
                    <div className="w-max p-1 rounded dark:bg-slate-500   bg-slate-100">
                      {data.categoryname === "Web Development" ? (
                        <TabletSmartphone size={17} />
                      ) : (
                        <MonitorSmartphone size={17} />
                      )}
                    </div>
                    <div className="font-semibold sm:text-md">
                      {data.projecttitle} ASD
                    </div>
                  </div>
                  <div
                    className={"p-[3px] rounded mr-2 text-xs  "}
                    style={
                      {
                        backgroundColor: `${data.priorityhexcolour}`,
                        border: `1px solid ${data.priorityhexcolour}`,
                      }
                    }
                  >
                
                  </div>
                </div>
                <div className="p-2">
                  <div className="line-clamp-2 dark:text-zinc-300 w-full  text-[13px] font-normal ">
                    {data.projectdescription} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dolorem. Est placeat ipsum dolorem voluptates, dolore maxime nulla deserunt beatae, quisquam omnis ipsa ut, perspiciatis atque veniam dolor consectetur doloribus tempore illo. Ut eveniet laudantium sed error? Labore, rem earum!
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <div className="text-xs">{data.startdate} 123123</div>
                    </div>
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
