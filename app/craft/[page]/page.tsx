"use client";

import CraftedArt from "@/components/crafts/crafted/art";
import { craftsData, CraftType } from "@/components/crafts/data";
import VercelTicket from "@/components/crafts/crafted/vercel-ticket";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CornerUpLeft, Link2 } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Fiber from "@/components/crafts/crafted/fiber";

export default function Crafted({ params }: { params: { page: string } }) {
  const pageData = useMemo(() => {
    let data: CraftType | undefined = undefined;

    return (data = craftsData.craftsFirst.find(
      (craft) => craft.id === params.page && params.page
    )
      ? craftsData.craftsFirst.find(
          (craft) => craft.id === params.page && params.page
        )
      : craftsData.craftsSecond.find(
          (craft) => craft.id === params.page && params.page
        )
      ? craftsData.craftsSecond.find(
          (craft) => craft.id === params.page && params.page
        )
      : craftsData.craftsThird.find(
          (craft) => craft.id === params.page && params.page
        )
      ? craftsData.craftsThird.find(
          (craft) => craft.id === params.page && params.page
        )
      : undefined);
  }, [params.page]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
    toast("URL copied successfully!");
  };

  return (
    <div className="mt-12">
      <div className="sm:flex-row flex-col gap-4 flex w-full items-start justify-between">
        <Link
          href="/craft"
          className="flex items-center hover:text-foreground text-gray-11 duration-150"
        >
          <CornerUpLeft className="w-3 mb-0.5 mr-1" />
          <p className="text-xs">Craft</p>
        </Link>
        <div className="max-w-[672px] w-full mx-auto mt-1 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">{pageData?.name}</p>
            <p className="text-xs text-foreground/50">{pageData?.date}</p>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <div
                className="w-8 h-8 cursor-pointer rounded-full flex flex-col justify-center items-center bg-gray-3"
                onClick={() => copyToClipboard()}
              >
                <Link2 className="w-4 text-gray-11" />
              </div>
            </TooltipTrigger>
            <TooltipContent>Copy URL</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div
        className={cn(
          "h-[40svh] my-12 bg-gray-2 border border-gray-4 rounded-[4px]",
          params.page === "nodebox" && "h-[90svh]"
        )}
      >
        {params.page === "art" && <CraftedArt />}
        {params.page === "vercel" && <VercelTicket />}
        {params.page === "nodebox" && <Fiber />}
      </div>{" "}
      <div className="sm:flex-row flex-col gap-4 flex w-full items-start justify-between">
        <div className="w-[45px] h-[0.1px]" />
        <Separator className="max-w-[672px] w-full mx-auto" />
      </div>
    </div>
  );
}
