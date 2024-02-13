import React from "react";
import Image from "next/image";

const SignInMobile = () => {
  return (
    <div className="relative -mt-16 block lg:hidden">
      <a
        className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
        href="#"
      >
        <span className="sr-only">Home</span>
        <Image
          src="/logo-no-background.png"
          width={90}
          height={90}
          alt="logo"
        />
      </a>

      <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Welcome to Photography Academy
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
        Join our tribe of over 600,000 photographers worldwide.
      </p>
    </div>
  );
};

export default SignInMobile;
