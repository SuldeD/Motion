import type { Metadata } from "next";
import "./globals.css";
import Proveder from "@/components/provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: { icon: "/M.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`min-h-svh font-sans antialiased ${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark", "light", "gold"]}
        >
          <Proveder>{children}</Proveder>
        </ThemeProvider>
      </body>
    </html>
  );
}
