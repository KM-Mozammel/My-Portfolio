"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(`👁️ Traffic logged for path: ${pathname}`);
    // Later: fetch("/api/metrics", { method: "POST", ... })
  }, [pathname]);

  return null;
}