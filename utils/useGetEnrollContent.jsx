import React, { useState, useEffect } from "react";
import { copy } from "@/copy/courseEnrollCopy";
import { Button } from "@/components/ui/lib/button";
import Link from "next/link";

const useGetEnrollContent = ({
  handleContinue,
  handleEnroll,
  isEnrolled,
  user,
  isCourseAvailable,
}) => {
  const [description, setDescription] = useState("");
  const [button, setButton] = useState(null);
  useEffect(() => {
    switch (true) {
      case isEnrolled:
        setDescription(copy.userContinue.description);
        setButton(
          <Button
            variant="default"
            size="default"
            className="bg-white text-primary hover:bg-slate-100 w-full"
            asChild={false}
            onClick={handleContinue}
          >
            {copy.userContinue.buttonText}
          </Button>
        );
        break;
      case !user:
        setDescription(copy.notUser.description);
        setButton(
          <Link href="/sign-in">
            <Button
              variant="default"
              size="default"
              className="bg-white text-primary hover:bg-slate-100 w-full"
              asChild={false}
            >
              {copy.notUser.buttonText}
            </Button>
          </Link>
        );
        break;
      case isCourseAvailable:
        setDescription(copy.available.description);
        setButton(
          <Button
            variant="default"
            size="default"
            className="bg-white text-primary hover:bg-slate-100"
            asChild={false}
            onClick={handleEnroll}
          >
            {copy.available.buttonText}
          </Button>
        );
        break;
      default:
        setDescription(copy.paywall.description);
        setButton(
          <Button
            variant="default"
            size="default"
            className="bg-white text-primary hover:bg-slate-100"
            asChild={false}
            onClick={handleEnroll}
          >
            {copy.paywall.buttonText}
          </Button>
        );
    }
  }, [isEnrolled, user, isCourseAvailable]);
  return { button, description };
};

export default useGetEnrollContent;
