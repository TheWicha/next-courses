import React from "react";
import { menuItems } from "../../app/_utils/navItems";
import Link from "next/link";
import { clsx } from "clsx";

const NavItems = ({ path }) => {
  const listItems = menuItems.map((item, index) => (
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
  ));
  return listItems;
};

export default NavItems;
