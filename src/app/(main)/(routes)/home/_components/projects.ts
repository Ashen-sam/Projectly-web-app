import { ReactNode } from "react";

interface IProjectData {
  id: number;
  projectName: string;
  projectDate: string;
  projectStatus: string;
  projectPriority: string;
  projectShortDesc: string;
  statusColor: string;
  projectType?: "web" | "mobile" | "desktop";
}

export const projectsData: IProjectData[] = [
  {
    id: 1,
    projectName: "Website Redesign",
    projectDate: "2023-01-15",
    projectStatus: "In Progress",
    projectPriority: "High",
    projectShortDesc:
      "Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.Complete overhaul of the existing customer portal to improve UX and add new features.",
    statusColor: "#F59E0B",
    projectType: "web",
  },
  {
    id: 2,
    projectName: "Mobile App Launch",
    projectDate: "2023-02-01",
    projectStatus: "Completed",
    projectPriority: "Medium",
    projectShortDesc:
      "Development and launch of the mobile app for our online store on both iOS and Android platforms.",
    statusColor: "#10B981",
  },
  {
    id: 2,
    projectName: "Mobile App Launch",
    projectDate: "2023-02-01",
    projectStatus: "Completed",
    projectPriority: "Medium",
    projectShortDesc:
      "Development and launch of the mobile app for our online store on both iOS and Android platforms.",
    statusColor: "#10B981",
  },
  {
    id: 3,
    projectName: "Cloud Migration",
    projectDate: "2023-01-20",
    projectStatus: "Pending",
    projectPriority: "Low",
    projectShortDesc:
      "Transition all internal servers and data storage to cloud-based solutions to improve scalability and reduce costs.",
    statusColor: "#3B82F6", // Blue for Pending
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 3,
    projectName: "Cloud Migration",
    projectDate: "2023-01-20",
    projectStatus: "Pending",
    projectPriority: "Low",
    projectShortDesc:
      "Transition all internal servers and data storage to cloud-based solutions to improve scalability and reduce costs.",
    statusColor: "#3B82F6", // Blue for Pending
  },
  {
    id: 2,
    projectName: "Mobile App Launch",
    projectDate: "2023-02-01",
    projectStatus: "Completed",
    projectPriority: "Medium",
    projectShortDesc:
      "Development and launch of the mobile app for our online store on both iOS and Android platforms.",
    statusColor: "#10B981",
  },
  {
    id: 3,
    projectName: "Cloud Migration",
    projectDate: "2023-01-20",
    projectStatus: "Pending",
    projectPriority: "Low",
    projectShortDesc:
      "Transition all internal servers and data storage to cloud-based solutions to improve scalability and reduce costs.",
    statusColor: "#3B82F6",
  },
  {
    id: 1,
    projectName: "Website Redesign",
    projectDate: "2023-01-15",
    projectStatus: "In Progress",
    projectPriority: "High",
    projectShortDesc:
      "Complete overhaul of the existing customer portal to improve UX and add new features.",
    statusColor: "#F59E0B",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
  {
    id: 4,
    projectName: "AI Integration",
    projectDate: "2023-03-05",
    projectStatus: "In Progress",
    projectPriority: "Critical",
    projectShortDesc:
      "Implement AI to automate customer service responses and improve analytics capabilities.",
    statusColor: "#EF4444",
  },
];
