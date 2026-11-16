import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Logo() {
  return (
    <Link href="/" aria-label={`${siteConfig.name} - home`} className="block w-[104px]">
      <span className="flex items-center gap-1.5">
        <span className="text-base font-black">{siteConfig.firstName}</span>
        <span className="h-[13px] w-[31px] rounded-2xl bg-prime-yellow-600" />
      </span>
      <span className="-mt-0.5 block text-sm font-medium text-black/50">
        {siteConfig.lastName}
      </span>
    </Link>
  );
}
