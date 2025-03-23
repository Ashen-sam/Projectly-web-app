"use client";
import { Button, CommonDialog, Input, ValidationErrors } from "@/components";
import { Formik } from "formik";
import { PackagePlus } from "lucide-react";
import { FunctionComponent } from "react";
import * as Yup from "yup";

export interface IAddProject {
  open: boolean;
  close: () => void;
}

export const AddProject: FunctionComponent<IAddProject> = ({ close, open }) => {
  const validationSchema = Yup.object().shape({
    projectName: Yup.string()
      .required("Project name is required")
      .max(100, "Project name must be 50 characters"),
  });

  const initialValues = {
    projectName: "",
  };

  return (
    <CommonDialog
      close={close}
      open={open}
      className="min-h-[700px] flex flex-col sm:min-w-[600px] "
      DialogHeaderTitle="Add new project"
      DialogTitleIcon={<PackagePlus size={20} />}
    >
      <div className="mt-1 border">
        <Formik
          validateOnBlur
          validateOnChange
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            errors,
            touched,

            handleBlur,
            handleChange,
          }) => (
            <form autoFocus={false} className="flex flex-col gap-4 ">
              <div className="flex flex-col ">
                <Input
                  autoFocus={false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={"projectName"}
                  placeholder="project name"
                />
                {/* <ErrorMessage className="text-red-500" name="projectName" /> */}
                {touched.projectName && errors.projectName && (
                  <ValidationErrors>{errors.projectName}</ValidationErrors>
                )}
              </div>

              <div className="flex justify-end  items-center">
                <Button size={"sm"} className="border  text-sm  " type="submit">
                  Add project
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </CommonDialog>
  );
};
