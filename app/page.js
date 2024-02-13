"use client";
import { useEffect } from "react";
import { Button } from "../components/ui/lib/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    user ? router.push("dashboard") : null;
  });
  return (
    <div>
      <Link href="/courses">
        <Button>Start</Button>
      </Link>
    </div>
  );
}
