import { ArchiveX, Package, Target } from "lucide-react";
import Link from "next/link";

export const HeaderSecondary = () => {
  const pageRoutes = [
    {
      name: "Overview",
      route: "/home",
      icon: <Target size={15} />,
    },
    {
      name: "Projects",
      route: "projects",
      icon: <Package size={15} />,
    },
    {
      name: "Issues",
      route: "issues",
      icon: <ArchiveX size={15} />,
    },
    {
      name: "Completed",
      route: "",
      icon: "",
    },
  ];
  return (
    <div className="w-full p-2 border-b dark:border-gray-700  flex justify-center sm:justify-start sm:pl-10  items-center ">
      <ul className="flex items-center gap-5 text-sm  ">
        {pageRoutes.map((item, index) => {
          return (
            <Link
              className="xs:text-md text-xs flex gap-2 font-medium items-center"
              key={index}
              href={item.route}
            >
              <div>{item.icon}</div>
              {item.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
