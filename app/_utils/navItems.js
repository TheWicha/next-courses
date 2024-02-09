import { BadgeCheck, LayoutGrid, GraduationCap, BookOpen } from "lucide-react";

export const menuItems = [
  {
    id: 1,
    name: "All Courses",
    icon: BookOpen,
    link: "/courses",
  },
  {
    id: 2,
    name: "Membership",
    icon: BadgeCheck,
    link: "/membership",
  },
  {
    id: 3,
    name: "Store",
    icon: LayoutGrid,
    link: "/store",
  },
  {
    id: 4,
    name: "Be Instructor",
    icon: GraduationCap,
    link: "/instructor-program",
  },
];
