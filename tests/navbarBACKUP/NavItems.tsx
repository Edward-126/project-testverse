"use client";

import { headerLinks } from "@/components/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  closeMenu?: () => void;
}

const NavItems = ({ closeMenu }: NavItemsProps) => {
  const pathname = usePathname();

  const handleMenuItemClick = () => {
    closeMenu?.();
  };

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "font-semibold text-primary"
            } flex-center cursor-pointer whitespace-nowrap font-medium transition-all duration-200 hover:scale-105 hover:text-primary active:scale-100 active:text-neutral-950 md:mx-4 `}
            onClick={handleMenuItemClick}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
