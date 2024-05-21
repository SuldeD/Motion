import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Munkh Suld",
  description: "Uh oh! This page does not exist",
};

const Custom404 = (): JSX.Element => (
  <div className="flex flex-col gap-2 justify-center items-center h-[80svh]">
    <h1>404 - Page not found</h1>
    <p className="text-foreground/50">
      Uh oh! This page does not exists, maybe you clicked an old link or
      misspelled. Please try again…
    </p>
    <div className="h-2" />
    <Link href="/" passHref>
      Return home
    </Link>
  </div>
);

export default Custom404;
