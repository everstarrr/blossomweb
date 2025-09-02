import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Providers } from "./providers";

export const Cedra4F = localFont({
  src: [
    {
      path:"../../public/fonts/Cedra4F-Regular.woff2",
      weight: "400"
    },
    {
      path:"../../public/fonts/Cedra4F-Light.woff2",
      weight: "300"
    },
    {
      path:"../../public/fonts/Cedra4F-UltraLight.woff2",
      weight: "200"
    },
    {
      path:"../../public/fonts/Cedra4F-Thin.woff2",
      weight: "100"
    },
  ]
})

export const metadata: Metadata = {
  title: "BLOSSOMWEB",
  description: "by Moskvitina Polina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Cedra4F.className} antialiased`}
      >
        <Providers>
          <Header/>
            {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
