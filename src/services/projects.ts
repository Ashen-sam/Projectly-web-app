import { BaseApi } from "./BaseApi";

const Projects = BaseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<unknown, void>({
      query: () => "/posts",
    }),
  }),
  overrideExisting: false, // Optional
});

export const {} = Projects;
