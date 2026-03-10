"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

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