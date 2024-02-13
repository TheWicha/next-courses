import React from "react";
import { copy } from "@/copy/courseEnrollSectionCopy";
import { Button } from "@/components/ui/lib/button";
import Link from "next/link";

interface CourseEnrollSectionProps {
  isAvailable: boolean;
  user: any;
}

const CourseEnrollSection: React.FC<CourseEnrollSectionProps> = ({
  isAvailable,
  user,
}) => {
  const button = !user ? (
    <Link href="/sign-in">
      <Button
        variant="default"
        size="default"
        className="bg-white text-primary hover:bg-slate-100 w-full"
        asChild={false}
      >
        Sig In
      </Button>
    </Link>
  ) : (
    <Button
      variant="default"
      size="default"
      className="bg-white text-primary hover:bg-slate-100"
      asChild={false}
    >
      {isAvailable ? copy.member.buttonText : copy.guest.buttonText}
    </Button>
  );

  return (
    <div className="p-3 text-center rounded-sm bg-primary">
      <h2 className="text-[22px] font-bold text-white">{copy.title}</h2>
      <div className="flex flex-col gap-3 mt-3">
        <h2 className="text-white font-light">
          {isAvailable ? copy.member.description : copy.guest.description}
        </h2>
        {button}
      </div>
    </div>
  );
};

export default CourseEnrollSection;
