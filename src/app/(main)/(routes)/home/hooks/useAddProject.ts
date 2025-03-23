import { useState } from "react";


export const UseAddProject = () => {
  const [isOpenProject, setIsOpenProject] = useState<boolean>(false);

  const handleOpenProject = () => {
    setIsOpenProject(true);
  };

  const handleCloseProject = () => {
    setIsOpenProject(false);
  };

  return {
    isOpenProject,
    setIsOpenProject,
    handleOpenProject,
    handleCloseProject,
  };
};
