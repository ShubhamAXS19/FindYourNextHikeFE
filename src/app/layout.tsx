"use client";

import "./globals.css";
import { RecoilRoot } from "recoil";
import Header from "./(components)/Header/page";
import Footer from "./(components)/Footer/page";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define paths where the header and footer should NOT be displayed
  const hideHeaderFooterPaths = ["/login", "/signup"];

  // Check if the current path matches any path in the array
  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          {/* Conditionally render the header and footer */}
          {/* {!shouldHideHeaderFooter && <Header />} */}
          <Header />
          {children}
          <Footer />
          {/* {!shouldHideHeaderFooter && <Footer />} */}
        </RecoilRoot>
      </body>
    </html>
  );
}
