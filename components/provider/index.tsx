import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Proveder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative ">
      <div className="w-full z-50 sticky top-0">
        <Header />
      </div>

      <div className="container ">
        {children}
        <Footer />
      </div>
    </div>
  );
}
