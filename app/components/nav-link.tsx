"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
};

export default function NavLink({ href, label, variant = "desktop" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`block w-full rounded-full border px-3 py-2 text-center text-sm font-medium whitespace-nowrap transition ${
          isActive
            ? "border-[#8a5a2b]/55 bg-[#efe0cd] text-[#684321]"
            : "border-stone-300 bg-[#fbf7f0] text-stone-700"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`relative text-sm font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded after:transition-all after:duration-200 ${
        isActive
          ? "text-[#684321] after:w-full after:bg-[#8a5a2b]"
          : "text-stone-700 hover:text-[#684321] after:w-0 after:bg-[#8a5a2b] hover:after:w-full"
      }`}
    >
      {label}
    </Link>
  );
}
