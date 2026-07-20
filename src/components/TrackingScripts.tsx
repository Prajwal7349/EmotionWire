"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export default function TrackingScripts({ tags }: { tags?: string }) {
  const pathname = usePathname();

  if (pathname.startsWith('/secret-dashboard')) {
    return null;
  }

  return (
    <>
      {tags && <div dangerouslySetInnerHTML={{ __html: tags }} />}
    </>
  );
}
