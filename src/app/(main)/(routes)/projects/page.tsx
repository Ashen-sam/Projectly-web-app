"use client";
import { Button, Input } from "@/components";
import { AddProject } from "@/components/add-project";
import { SkeletonLoader } from "@/components/skeleton-loaders";
import { useGetAllProjectsQuery } from "@/services/projects";
import {
  ArrowUpDown,
  Calendar,
  MonitorSmartphone,
  PackagePlus,
  PackageSearch,
  TabletSmartphone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [addOpen, setAddOpen] = useState(false);
  const { data: projectData, isLoading: projectLoading } =
    useGetAllProjectsQuery();

  const handleAddProjectOpen = () => {
    setAddOpen(true);
  };

  const handleCloseProjectOpen = () => {
    setAddOpen(false);
  };

  return (
    <div>
      <div className="flex gap-2 sm:items-center items-start sm:flex-row flex-col-reverse ">
        <Input placeholder="find project ..." />
        <div className="flex gap-2 items-center">
          <Button size={"sm"} onClick={handleAddProjectOpen}>
            <PackagePlus />
            <div className="sm:block hidden">New project</div>
          </Button>
          <Button size={"sm"}>
            <ArrowUpDown />
            <div className="sm:block hidden">Sort</div>
          </Button>
          <Button size={"sm"}>Type </Button>
          <Button size={"sm"}>Category </Button>
        </div>
      </div>
      

      {projectLoading ? (
        <SkeletonLoader />
      ) : (
        <div
          className={`mt-4 max-h-[750px]  overflow-y-auto ${
            projectData?.length === 0
              ? "flex justify-center w-full "
              : " grid md:grid-cols-2 lg:grid-cols-3  gap-3 "
          }   `}
        >
          {projectData?.length === 0 ? (
            <div className="flex items-center justify-center  flex-col gap-1 min-h-[500px] text-gray-500">
              <PackageSearch size={90} className="" strokeWidth={1.1} />
              <div className="text-sm font-medium">No projects available</div>
            </div>
          ) : (
            projectData?.slice(0, 20).map((data, index: number) => {
              return (
                <Link key={index} href={`projects/${data.projectid}`}>
                  <div className="rounded-md dark:border bg-white group hover:bg-secondary/70 dark:hover:bg-secondary/20 min-h-[155px] cursor-pointer dark:bg-dark-bg-color  dark:border-gray-700 font-medium shadow-sm border p-3  flex-1  text-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-4 ">
                        <div className="w-max p-1 rounded dark:bg-slate-500 bg-slate-100">
                          {data.categoryname === "Web Development" ? (
                            <TabletSmartphone size={17} />
                          ) : (
                            <MonitorSmartphone size={17} />
                          )}
                        </div>
                        <div className="font-semibold sm:text-lg">
                          {data.projecttitle}
                        </div>
                      </div>
                      <div
                        className={"px-2 py-1 rounded text-xs text-white"}
                        style={{ backgroundColor: `${data.priorityhexcolour}` }}
                      >
                        {data.priorityname}
                      </div>
                    </div>
                    <div className="line-clamp-3 dark:text-zinc-300 max-w-4xl sm:text-[13px] ">
                      {data.projectdescription} Lorem ipsum dolor sit amet
                      consectetur adipisi
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
            })
          )}
        </div>
      )}
      <AddProject
        open={addOpen}
        onClose={handleCloseProjectOpen}
        DialogHeaderTitle={"Add project"}
        className={""}
        buttonText={"asd"}
      />
    </div>
  );
}
