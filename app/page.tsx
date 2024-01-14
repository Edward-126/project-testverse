import Image from "next/image";
import { FaAnglesDown } from "react-icons/fa6";

import heroImg from "./assets/hero.jpg";
import { Button } from "@/components/ui/button";
import CountUpItem from "@/testing/CountUp";
import Navbar from "@/testing/Navbar";
import Movies from "@/components/shared/Movies";
import Tvs from "@/components/shared/Tvs";
import Actors from "@/components/shared/Actors";

export default function Home() {
  return (
    <>
      <div className="h-full w-full">
        <Tvs />
      </div>
    </>
  );
}
