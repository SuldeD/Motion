"use client";

import HordeSandContainer from "@/components/crafts/crafted/horde-sand-animation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArtSvg } from "../data";

export default function CraftedArt() {
  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <HordeSandContainer
        closeAction={() => setShowAnimation(false)}
        showEaster={showAnimation}
      />
      <ArtSvg />
      <Button
        className="mt-6 bg-green-400 hover:bg-green-500"
        onClick={() => setShowAnimation(true)}
      >
        Show
      </Button>
    </div>
  );
}
