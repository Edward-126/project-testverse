import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import NavSocials from "./NavSocials";

const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 z-50 w-full filter backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 py-4 md:px-10 xl:px-20 2xl:px-28">
          <Link
            href="/"
            className="group z-50 text-3xl font-semibold 2xl:text-4xl"
          >
            LOGO
          </Link>

          <nav className="hidden w-fit md:flex">
            <NavItems
              classNames={{
                item: "",
                activeItem: "",
              }}
            />
          </nav>

          <div className="">
            <div className=" hidden sm:flex">
              <NavSocials
                classNames={{
                  icon: "",
                }}
              />
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
