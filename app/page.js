"use client";
import { useEffect } from "react";
import { Button } from "../components/ui/lib/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    user ? router.push("dashboard") : isLoaded && router.push("courses");
  });

  return (
    <div>
      <Link href="/courses">
        <Button>Start</Button>
      </Link>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
