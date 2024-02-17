"use client";

import { headerLinks } from "@/components/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  closeMenu?: () => void;
  classNames?: {
    item?: string;
    activeItem?: string;
  };
}

const NavItems = ({ closeMenu, classNames }: NavItemsProps) => {
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
            className={`flex-center whitespace-nowrap md:mx-4 
            ${classNames?.item || ""} 
            ${(isActive && classNames?.activeItem) || ""}`}
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
