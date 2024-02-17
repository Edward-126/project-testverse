import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";

const NavSocials = () => {
  return (
    <>
      <div className="flex gap-8 text-2xl">
        <Link href="" target="_blank">
          <SlSocialFacebook className="transition-all duration-200 hover:scale-110 hover:text-primary active:scale-100" />
        </Link>
        <Link href="" target="_blank">
          <FaInstagram className="transition-all duration-200 hover:scale-110 hover:text-primary active:scale-100" />
        </Link>
        <Link href="" target="_blank">
          <FaWhatsapp className="transition-all duration-200 hover:scale-110 hover:text-primary active:scale-100" />
        </Link>
      </div>
    </>
  );
};

export default NavSocials;
