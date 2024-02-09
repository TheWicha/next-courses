import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center bg-white rounded-xl p-5">
      <Image
        src="./welcome.svg"
        width={170}
        height={123}
        alt="welcome banner"
      />
      <div>
        <h2 className="font-bold text-[22px] mb-0">Welcome to our academy!</h2>
        <h3 className="text-gray-500">Lorem ipsum dolor, sit amet elit.</h3>
      </div>
    </div>
  );
};

export default WelcomeBanner;
