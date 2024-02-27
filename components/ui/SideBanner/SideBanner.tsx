"use client";
import Image from "next/image";
import React, { memo } from "react";
import Link from "next/link";
import { BannersType } from "./SideBannerTypes";

const SideBanner: React.FC<BannersType> = ({ banner }) => {
  return (
    <div className="flex flex-col gap-4 w-[250px]">
      {banner?.map((item, index) => (
        <Link href={item.url} key={index}>
          <Image
            src={item.banner.url}
            width={250}
            height={220}
            className="rounded-xl cursor-pointer border"
            alt={`${item.name} `}
          />
        </Link>
      ))}
    </div>
  );
};

export default memo(SideBanner);
