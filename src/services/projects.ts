import { IProjectData } from "@/app/(main)/(routes)/home/_components/projects";
import { BaseApi } from "./BaseApi";

export const Projects = BaseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProjects: build.query<IProjectData[], void>({
      query: () => "projects",
    }),
  }),

  overrideExisting: false,
});
export const { useGetAllProjectsQuery } = Projects;
