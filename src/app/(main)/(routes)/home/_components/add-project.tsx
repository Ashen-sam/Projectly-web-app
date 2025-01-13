"use client";
import { Button, CommonDialog, Input, ValidationErrors } from "@/components";
import { Formik } from "formik";
import { PackagePlus } from "lucide-react";
import * as Yup from "yup";

export default function AddProject() {
  const validationSchema = Yup.object().shape({
    projectName: Yup.string()
      .required("Project name is required")
      .max(100, "Project name must be 50 characters"),
    // projectSummary: Yup.string()
    //   .required("project summary is required")
    //   .max(100),
  });

  const initialValues = {
    projectName: "",
    // projectSummary: "",
    // projectCategory: "",
    // projectStatus: "",
    // projectPriority: "",
    // startDate: "",
    // endDate: "",
    // projectDescription: "",
  };

  return (
    <CommonDialog
      className="min-h-[700px] flex flex-col sm:min-w-[600px] "
      DialogHeaderTitle="Add new project"
      buttonText={"New project"}
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
              {/* <div className="flex gap-1">
                <div className="flex  flex-col flex-grow">
                  <DatePicker
                    onDateChange={(date) => setFieldValue("startDate", date)}
                  />
                  <ValidationErrors>{errors.startDate}</ValidationErrors>
                </div>
                <div className="flex  flex-col flex-grow">
                  <DatePicker
                    onDateChange={(date) => setFieldValue("startDate", date)}
                  />
                  <ValidationErrors>{errors.startDate}</ValidationErrors>
                </div>
              </div> */}

              {/* <div className="flex flex-col">
                <Field
                  name={"projectSummary"}
                  className="min-h-[80px]"
                  placeholder="Summary about project"
                />
              </div> */}

              {/* <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px] flex justify-start gap-4  items-center pl-5 ">
                    <div>
                      <LaptopMinimal size={13} />
                    </div>
                    <SelectValue
                      placeholder="Category"
                      className="placeholder:text-xs border"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div>
                  <Select name="projectStatus">
                    <SelectTrigger className="w-[180px] flex justify-start gap-4  items-center pl-5 ">
                      <div>
                        <ChartPie size={13} />
                      </div>
                      <SelectValue
                        placeholder="Status"
                        className="placeholder:text-xs border"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="apple"
                        >
                          Apple
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                    <ValidationErrors>{errors.projectStatus}</ValidationErrors>
                  </Select>
                </div>

                <Select>
                  <SelectTrigger className="w-[180px] flex justify-start gap-4  items-center pl-5 ">
                    <div>
                      <ListStart size={13} />
                    </div>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                </Select>
              </div> */}

              {/* <div className="flex flex-col gap-2">
                <Textarea
                  className="min-h-[350px]"
                  id="email"
                  name="text"
                  placeholder="Description"
                />
              </div> */}

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
}
