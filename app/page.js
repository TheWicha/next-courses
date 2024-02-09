import { Button } from "@/components/ui/lib/button";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/courses">
      <Button>Button</Button>
    </Link>
  );
}
