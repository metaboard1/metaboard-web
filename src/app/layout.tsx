import type { Metadata } from "next";
import "../styles/index.css";
import "../styles/app.css";
import { Footer, Header } from "@/components/global";
import { Suspense } from "react";
import Loading from "./loading";
// import "../styles/metarule-css.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Suspense fallback={<Loading />}> */}
          <Header />
          {children}
          <Footer />
        {/* </Suspense> */}
      </body>
    </html>
  );
}
