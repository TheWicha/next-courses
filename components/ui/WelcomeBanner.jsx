import Image from "next/image";
import React from "react";
import { copy } from "@/copy/welcomeBannerCopy";
import { useInterpolateText } from "@/utils/useInterpolatedText";

const WelcomeBanner = () => {
  const title = useInterpolateText(copy.title, "text-primary");
  const description = useInterpolateText(copy.description, "font-semibold");

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center bg-white rounded-xl p-5">
      <Image
        src="./welcome.svg"
        width={170}
        height={123}
        alt="welcome banner"
      />
      <div>
        <h2 className="font-bold text-[22px] mb-0">{title}</h2>
        <h3 className="text-gray-500">{description}</h3>
      </div>
    </div>
  );
};

export default WelcomeBanner;
