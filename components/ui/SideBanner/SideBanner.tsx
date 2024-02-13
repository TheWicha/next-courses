"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Skeleton from "../Skeleton/Skeleton";
import { BannersType } from "./SideBannerTypes";

const SideBanner: React.FC<BannersType> = ({ banner }) => {
  const banners =
    banner &&
    banner?.map((item, index) => (
      <Link href={item.url} key={index}>
        <Image
          src={item.banner.url}
          width={250}
          height={220}
          className="rounded-xl cursor-pointer border"
          alt={`${item.name} `}
        />
      </Link>
    ));

  if (!banner) {
    return (
      <div className="flex flex-col gap-4 w-[250px]">
        {<Skeleton variant="sm" numberOfSkeletons={3} />}
      </div>
    );
  }
  return <div className="flex flex-col gap-4 w-[250px]">{banners}</div>;
};

export default SideBanner;
