import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";

const firaMono = Fira_Code({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Nihal Nick - Everything under logic.",
  description: "Best digital NFT & Illustration atrist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaMono.className} antialiased`}>
        <main className=" overflow-hidden max-w-[775px] w-full  mx-auto my-8 px-4 flex-center flex-col uppercase">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
