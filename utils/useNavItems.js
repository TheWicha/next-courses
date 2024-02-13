import {
  BadgeCheck,
  GraduationCap,
  BookOpen,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";

export const useMenuItems = ({ user }) => {
  const items = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      link: "/courses",
      auth: true,
    },
    {
      id: 2,
      name: "Dashboard",
      icon: LayoutDashboard,
      link: "/dashboard",
      auth: user,
    },
    {
      id: 3,
      name: "Membership",
      icon: BadgeCheck,
      link: "/membership",
      auth: true,
    },
    {
      id: 4,
      name: "Store",
      icon: ShoppingCart,
      link: "/store",
      auth: true,
    },
    {
      id: 5,
      name: "Be Instructor",
      icon: GraduationCap,
      link: "/instructor-program",
      auth: true,
    },
  ];
  return items;
};
