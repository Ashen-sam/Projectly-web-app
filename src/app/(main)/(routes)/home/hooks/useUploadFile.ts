import { useDropzone } from "react-dropzone";

export const UseUploadFile = () => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  return {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
  };
};
