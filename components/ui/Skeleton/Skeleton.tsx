import React from "react";
import { clsx } from "clsx";
import { SkeletonPropsType } from "./skeletonType";

const Skeleton: React.FC<SkeletonPropsType> = ({
  numberOfSkeletons,
  variant,
}) => {
  const skeletonItems = new Array(Number(numberOfSkeletons) || 9).fill(null);

  return (
    <>
      {skeletonItems?.map((_, index) => (
        <div
          key={index}
          className={clsx("rounded-xl bg-slate-200 animate-pulse ", {
            "h-[140px]": variant === "sm",
            "w-full": variant === "md",
            "h-[240px]": variant === "md",
            "w-[500px]": variant === "big",
            "h-[330px]": variant === "big",
          })}
        />
      ))}
    </>
  );
};

export default Skeleton;
