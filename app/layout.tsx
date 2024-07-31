import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "次に(tsugini) | FScode",
  description: "A basic NextJS template for Frontend Mentor Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} flex min-h-screen flex-col antialiased scroll-smooth text-base bg-ba-desaturated-red/10 sm:max-w-[1175px] sm:mx-auto sm:grid sm:grid-cols-2 sm:items-start sm:content-start sm:min-w-[926px]`}>
        {children}
      </body>
    </html>
  );
}
