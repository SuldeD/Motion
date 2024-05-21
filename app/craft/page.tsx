"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { craftsData, CraftType } from "@/components/crafts/data";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Craft = ({ key, craft }: { key: number; craft: CraftType }) => {
  const router = useRouter();
  return (
    <div
      key={craft.id}
      onClick={() => {
        craft.type === "link" && router.push(`/craft/${craft.id}`);
      }}
      className={cn(
        "flex bg-gray-2 group p-1 rounded-[12px] border border-gray-5 w-full flex-col items-center justify-center gap-1",
        craft.type === "link" ? "cursor-pointer" : ""
      )}
    >
      <div className="relative overflow-hidden rounded-[8px] w-full">
        {craft.video && craft.video.length > 0 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <video loop autoPlay playsInline>
              <source src={craft.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Suspense>
        ) : (
          <Image
            src={craft.image ?? "/craft/ca.png"}
            alt={craft.name}
            width={500}
            height={500}
            priority
            className="w-full"
          />
        )}
        <div className="absolute bottom-0 w-full p-4 flex justify-between items-center">
          <p
            className={cn(
              "text-xs text-foreground/90",
              craft.black && "text-gray-1/90"
            )}
          >
            {craft.name}
          </p>
          <p
            className={cn(
              "text-xs text-foreground/60",
              craft.black && "text-gray-1/60"
            )}
          >
            May 2024
          </p>
        </div>
      </div>
      {craft.type === "link" && (
        <div className="h-10 group-hover:bg-gray-4 duration-150 bg-gray-3 rounded-[8px] w-full text-xs flex justify-center items-center font-medium">
          {craft.type === "link" ? "View prototype" : ""}
          <ArrowRight className="w-3 ml-1" />
          {/* <ArrowUpRight className="w-3 ml-1" /> */}
        </div>
      )}
    </div>
  );
};

function Crafts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-12">
      <div className="col-span-1 gap-2 flex flex-col sm:hidden">
        {[
          ...craftsData.craftsFirst,
          ...craftsData.craftsSecond,
          ...craftsData.craftsThird,
        ].map((craft, idx) => (
          <div key={idx}>
            <Craft key={idx} craft={craft} />
          </div>
        ))}
      </div>

      <div className="col-span-1 gap-2 hidden sm:flex md:hidden flex-col ">
        {[...craftsData.craftsFirst, ...craftsData.craftsSecond].map(
          (craft, idx) => (
            <div key={idx}>
              <Craft key={idx} craft={craft} />
            </div>
          )
        )}
      </div>
      <div className="col-span-1 gap-2 hidden sm:flex md:hidden flex-col ">
        {craftsData.craftsSecond.map((craft, idx) => (
          <div key={idx}>
            <Craft key={idx} craft={craft} />
          </div>
        ))}
      </div>

      <div className="col-span-1 gap-2 hidden md:flex flex-col ">
        {craftsData.craftsFirst.map((craft, idx) => (
          <div key={idx}>
            <Craft key={idx} craft={craft} />
          </div>
        ))}
      </div>
      <div className="col-span-1 gap-2 hidden md:flex flex-col ">
        {craftsData.craftsSecond.map((craft, idx) => (
          <div key={idx}>
            <Craft key={idx} craft={craft} />
          </div>
        ))}
      </div>
      <div className="col-span-1 gap-2 hidden md:flex flex-col ">
        {craftsData.craftsThird.map((craft, idx) => (
          <div key={idx}>
            <Craft key={idx} craft={craft} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crafts;
