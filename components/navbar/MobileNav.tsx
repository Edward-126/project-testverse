"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
import NavSocials from "./NavSocials";
import { navItemsVariants } from "./";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeMenuOnOutsideClick = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", closeMenuOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="md:hidden">
        <div
          ref={menuRef}
          className={`${isOpen ? "h-screen" : "h-15"} fixed inset-0 z-40`}
        >
          <div className="absolute right-0 top-0 z-50">
            <button
              onClick={toggleMenu}
              className="px-[1.4rem] py-8 focus:outline-none"
            >
              <div
                className={`absolute left-0 h-[3px] w-6 transform bg-black transition-all duration-300 ${
                  isOpen
                    ? "top-1/2 translate-y-1/2 rotate-[45deg]"
                    : "top-[60%] translate-y-1/2"
                }`}
              ></div>

              <div
                className={`absolute left-0 h-[3px] w-6 transform bg-black transition-all duration-300 ${
                  isOpen
                    ? "top-1/2 translate-y-1/2 -rotate-[45deg]"
                    : "top-[40%] translate-y-1/2"
                }`}
              ></div>
            </button>
          </div>

          {isOpen && (
            <motion.div
              variants={navItemsVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-3xl md:px-10 xl:px-20 2xl:px-28"
            >
              <NavItems closeMenu={closeMenu} />
              <div className="absolute bottom-0 w-full px-5 py-4 md:px-10 xl:px-20 2xl:px-28">
                <NavSocials />
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
