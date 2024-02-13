import React from "react";
import { useMenuItems } from "@/utils/useNavItems";
import Link from "next/link";
import { clsx } from "clsx";
import { NavItemsType } from "./navItemsTypes";
import { useUser } from "@clerk/nextjs";

const NavItems: React.FC<NavItemsType> = ({ path }) => {
  const { user } = useUser();
  const menuItems = useMenuItems({ user });
  const listItems = menuItems.map(
    (item, index) =>
      item.auth && (
        <Link href={item.link} key={index}>
          <div
            className={clsx(
              "group flex gap-3 mt-2 p-3 text-[18] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-150",
              {
                "bg-primary text-white": path.includes(item.link),
              }
            )}
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        </Link>
      )
  );
  return listItems;
};

export default NavItems;
