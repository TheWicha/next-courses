import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/lib/button";

const HeaderButtonUnlog = () => {
  return (
    <Link href="/sign-in">
      <Button
        variant="default"
        size="default"
        className={undefined}
        asChild={undefined}
      >
        Get Started
      </Button>
    </Link>
  );
};

export default HeaderButtonUnlog;
