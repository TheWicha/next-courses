import React from "react";
import Image from "next/image";

const SignInDesktop = () => {
  return (
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <Image
        alt="cover image"
        src="/cover.avif"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        width={500}
        height={500}
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
          <Image
            className="bg-white rounded-full"
            src="/logo-no-background.png"
            width={90}
            height={90}
            alt="logo"
          />
        </a>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to Academy
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
          Join our tribe of over 600,000 photographers worldwide.
        </p>
      </div>
    </section>
  );
};

export default SignInDesktop;
