import { Button } from "@/components";
import { FolderOpen, PackageOpen, Upload } from "lucide-react";
import { FunctionComponent } from "react";
import { UseUploadFile } from "../hooks/useUploadFile";

export const UploadContainer: FunctionComponent = () => {

  const { acceptedFiles, getInputProps, getRootProps, open } = UseUploadFile();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="w-full ine-clamp-5 box_effect bg-gray-50  p-3 flex items-center justify-between">
      <div className="flex gap-4 items-center ">
        <PackageOpen size={33} strokeWidth={1.5} className="text-primary_color" />
        <div className="flex flex-col">
          <div className="text-sm font-semibold">
            Upload your important PDF files
          </div>
          <div className="text-xs">
            Examples like your certificates, images and etc.
          </div>
        </div>
      </div>
      <input {...getInputProps()} />
      <div {...getRootProps({ className: "dropzone flex gap-2" })}>
        <Button variant={"outline"}  size={"sm"}>
          <FolderOpen size={30} /> view
        </Button>
        <Button variant={'outline'} size={"sm"} onClick={open}>
          <Upload />
          upload{" "}
        </Button>
        {files}
      </div>
    </div>
  );
};
