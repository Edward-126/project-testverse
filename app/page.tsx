import Image from "next/image";

import { FaAnglesDown } from "react-icons/fa6";
import heroImg from "./assets/hero.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen px-5 md:px-10 xl:px-20 2xl:px-28">
        <header className="flex h-screen flex-col items-center justify-center gap-5 md:gap-8">
          <h1 className="text-6xl md:text-8xl">
            Track your passion,{" "}
            <span className=" text-neutral-400">one episode at a time.</span>
          </h1>
          <div className="group relative h-1/4">
            <Image
              src={heroImg}
              placeholder="blur"
              priority={true}
              alt="header-img"
              className=" h-full rounded-lg object-cover"
            />
            <div className=" absolute bottom-0 right-0 rounded-br-lg rounded-tl-lg p-1 px-4 text-sm capitalize text-white opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:opacity-100">
              <h1 className="">cozy anime room</h1>
            </div>
          </div>

          <div className=" grid gap-4 md:grid-cols-2 md:gap-8">
            <div className=" grid grid-cols-2 items-center gap-8 capitalize">
              <span>
                <h2 className=" text-5xl font-semibold">480</h2>
                <p className=" text-xl">Series added</p>
              </span>
              <span>
                <h2 className=" text-5xl font-semibold">5+</h2>
                <p className=" text-xl">Years of memories</p>
              </span>
            </div>
            <div className="">
              <p className="mb-4 text-xl">
                Beyond the screen, beyond the subtitles. Dive deeper into your
                fandom with a watchlist that cares.
              </p>
              <Button className=" group rounded-full p-6 px-8 text-lg font-thin transition-all duration-200 hover:scale-105 active:scale-100">
                <FaAnglesDown className="mr-2 transition-all duration-200 group-hover:translate-y-1 group-active:translate-y-0" />
                <span>Explore</span>
              </Button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}