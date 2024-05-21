import { GitHub, Vercel } from "@/components/ui/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center flex flex-col justify-center">
      <div className="w-full h-[90svh] relative flex flex-col">
        <div className="flex basis-1/4 border border-b-0 ">
          <Link
            href="https://vercel.com/geist/gauge"
            target="_blank"
            className="flex basis-1/4 cursor-pointer items-center justify-center hover:bg-ds-gray-100/30 active:bg-ds-gray-200/70"
          >
            <Vercel />
          </Link>
          <div className="flex basis-2/4 items-center justify-center border-x ">
            <h1 className="text-5xl sm:text-7xl">Mattman</h1>
          </div>
          <Link
            href="https://github.com/ajayvignesh01/geist-gauge"
            target="_blank"
            className="flex basis-1/4 cursor-pointer items-center justify-center hover:bg-ds-gray-100/30 active:bg-ds-gray-200/70"
          >
            <GitHub />
          </Link>
        </div>
        <div className="relative flex flex-1 basis-2/4 items-center justify-evenly border  ">
          asd
        </div>
      </div>
      {/* <div className="relative h-[50vh] w-full flex items-center justify-center">
        <Sparkle className="absolute -left-[8.5px] -top-2 z-10 size-4 fill-ds-gray-1000 stroke-ds-gray-1000" />
        <Sparkle className="absolute -right-[8.5px] -top-2 z-10 size-4 fill-ds-gray-1000 stroke-ds-gray-1000" />

        <div className="animate-in-b ">
          <Link href="/vercel">
            <picture>
              <img className="animate-spin-slow" src="./Logo.webp" alt="logo" />
            </picture>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
