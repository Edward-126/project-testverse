{isOpen && (
<div className="lg:hidden">
<ul className="">
<li>
<a
                href="#about"
                className="mt-3 block p-2 transition-all hover:text-red-500"
              >
About
</a>
</li>
<li>
<a
                href="#programs"
                className="block p-2 transition-all hover:text-red-500"
              >
Programs
</a>
</li>
<li>
<a
                href="#pricing"
                className="block p-2 transition-all hover:text-red-500"
              >
Pricing
</a>
</li>
<li>
<a
                href="#testimonial"
                className="block p-2 transition-all hover:text-red-500"
              >
Testimonial
</a>
</li>
<li>
<a
                href="#contact"
                className="block p-2 transition-all hover:text-red-500"
              >
Contact Us
</a>
</li>
</ul>
</div>
)}

      -----

      <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text focus:outline-none"
          >
            <RiMenu3Fill className="text-2xl" />
          </button>
        </div>







        --------------





        "use client";

import React, { useState, useRef, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import NavItems from "./NavItems";
import NavSocials from "./NavSocials";

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
className={`${
            isOpen ? "h-screen bg-neutral-400/50" : "h-15"
          } fixed inset-0 z-40`} >
<div className="absolute right-0 top-0">
<button onClick={toggleMenu} className="p-4 focus:outline-none">
<RiMenu3Fill className="text-2xl" />
</button>
</div>

          {isOpen && (
            <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-3xl md:px-10 xl:px-20 2xl:px-28">
              <NavItems closeMenu={closeMenu} />
              <div className="absolute bottom-0 w-full px-5 py-4 md:px-10 xl:px-20 2xl:px-28">
                <NavSocials />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>

);
};

export default MobileNav;

---

<div
                className={`absolute left-0 top-1/2 h-[.1rem] w-6 transform bg-black transition-all duration-300 ${
                  isOpen ? "translate-y-[-50%] rotate-45" : "translate-y-[-50%]"
                }`}
              ></div>
              <div
                className={`absolute left-0 top-1/2 h-[.1rem] w-6 bg-black transition-all duration-100 ${
                  isOpen ? "opacity-0" : "opacity-100"
                } ${isOpen ? "" : "translate-y-[-50%]"} `}
              ></div>
              <div
                className={`absolute left-0 top-1/2 h-[.1rem] w-6 transform bg-black transition-all duration-300 ${
                  isOpen
                    ? "translate-y-[-50%] -rotate-45"
                    : "translate-y-[-50%]"
                }`}
              ></div>
