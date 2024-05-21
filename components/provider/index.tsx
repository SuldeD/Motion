import React from "react";
import Header from "./header";
import Footer from "./footer";
import { TooltipProvider } from "../ui/tooltip";
import { Toaster } from "../ui/sonner";

export default function Proveder({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <div className="relative ">
        <div className="w-full z-50 sticky top-0">
          <Header />
        </div>

        <div className="container">
          {children}
          <Footer />
        </div>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
