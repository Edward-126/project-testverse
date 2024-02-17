import Temp from "@/components/Temp";

export default function Home() {
  return (
    <>
      <div className=" min-h-screen">
        <div className=" flex h-screen items-center justify-center">
          <h1 className=" text-3xl font-bold lg:text-4xl 2xl:text-6xl">
            HOME 😉
          </h1>
        </div>
      </div>
      <Temp />
    </>
  );
}
