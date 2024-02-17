import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";

interface NavSocialsProps {
  classNames?: {
    icon?: string;
  };
}

const NavSocials = ({ classNames }: NavSocialsProps) => {
  return (
    <>
      <div className="flex gap-8 text-2xl">
        <Link href="" target="_blank">
          <SlSocialFacebook className={` ${classNames?.icon} `} />
        </Link>
        <Link href="" target="_blank">
          <FaInstagram className={` ${classNames?.icon} `} />
        </Link>
        <Link href="" target="_blank">
          <FaWhatsapp className={` ${classNames?.icon} `} />
        </Link>
      </div>
    </>
  );
};

export default NavSocials;
