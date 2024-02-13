import { Button } from "../components/ui/lib/button";
import { UserButton } from "@clerk/nextjs";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/courses">
        {" "}
        <Button>Start</Button>
      </Link>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
