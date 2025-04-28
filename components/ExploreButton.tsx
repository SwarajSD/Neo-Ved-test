"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function ExploreButton() {
  const router = useRouter();

  return (
    <Button
      className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 text-white border-0 text-sm"
      onClick={() => router.push("/services/subpage")}
    >
      Explore Services
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
