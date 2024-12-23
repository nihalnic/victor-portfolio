import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Alvarado - Everything is canvas.",
  description: "Best digital NFT & Illustration atrist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCode.className} antialiased`}>
        <main className=" overflow-hidden max-w-[775px] w-full  mx-auto my-8 px-4 flex-center flex-col uppercase">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
