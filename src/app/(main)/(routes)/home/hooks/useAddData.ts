import { useState } from "react";

export interface ISampleData {
  id: number;
  label: string;
  value: string;
  icon?: string;
  name?:string;
}
export const useAddData = () => {
   const [userProfileOpen, setUserProfileOpen] = useState(false);
 

  const sampleData: ISampleData[] = [
    {
      id: 1,
      label: "Profile name",
      value: "",
      icon:'user'
      ,name:'Ashen Samarasekera'
    },
    {
      id: 2,
      label: "Job role",
      value: "Developer asdadasdasd",
      icon:'role'
    },
    {
      id: 3,
      label: "Email",
      value: "iamashen27@gmail.com",
      icon:'email'
    },
    {
      id: 4,
      label: "Contact no",
      value: "+94 754922549",
      icon:'phone'
    },
    {
      id: 5,
      label: "Country",
      value: "Sri lanka",
      icon:'country'
    },
    {
      id: 6,
      label: "State",
      value: "Gampaha",
      icon:'state'
    },
  ];
  const handleAddInfoData = () => {
    setUserProfileOpen(true);
  };

  return {
   
    userProfileOpen,
    handleAddInfoData,
    sampleData,
  };
};
