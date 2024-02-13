import {
  BadgeCheck,
  GraduationCap,
  BookOpen,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";

export const menuItems = [
  {
    id: 1,
    name: "All Courses",
    icon: BookOpen,
    link: "/courses",
  },
  {
    id: 2,
    name: "Dashboard",
    icon: LayoutDashboard,
    link: "/dashboard",
  },
  {
    id: 3,
    name: "Membership",
    icon: BadgeCheck,
    link: "/membership",
  },
  {
    id: 4,
    name: "Store",
    icon: ShoppingCart,
    link: "/store",
  },
  {
    id: 5,
    name: "Be Instructor",
    icon: GraduationCap,
    link: "/instructor-program",
  },
];
