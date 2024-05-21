"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import moment from "moment";
import { useTheme } from "next-themes";

const Header = () => {
  const [time, setTime] = useState(moment().format("LTS"));
  const { themes, setTheme } = useTheme();
  const [themeNumber, setThemeNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 items-center h-16 justify-between container bg-background">
      <div className="text-xs md:flex col-span-2 hidden font-light text-foreground/50 items-center gap-2">
        <p className="">IRELAND, DU</p>
        <p className="text-2xl">•</p>
        <Suspense>{time}</Suspense>
      </div>

      <Link href="/" className="col-span-1">
        <div className="flex items-center justify-start lg:justify-center gap-2 text-xs font-semibold text-foreground text-center">
          <span className="text-foreground">
            <span>MATTMAN</span>
            <span className="font-light text-foreground/50">.COM</span>
          </span>
        </div>
      </Link>

      <div className="col-span-2 gap-2 flex justify-end">
        <Button
          size="sm"
          variant="ghost"
          className="font-medium"
          onClick={() => {
            themes.length > themeNumber + 1
              ? setThemeNumber(themeNumber + 1)
              : setThemeNumber(0);
            setTheme(themes[themeNumber]);
          }}
        >
          <div className="w-4 h-4 bg-primary rounded-full" />
        </Button>
        {/* <Button size="sm" variant="ghost" className="font-medium">
          LOG IN
        </Button>
        <Button size="sm" className="items-center flex gap-2 font-medium">
          SIGN UP <ArrowRightIcon className="w-4 h-4" />
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
