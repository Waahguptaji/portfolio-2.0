import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "@/components/providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil",
  description: "Sahil's Portfolio",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full`}>
        <Providers>
          <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative flex flex-col items-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {/* Centered Container */}
            <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
              <Header />
              <main className="flex-grow z-10 w-full">{children}</main>
              {/* <Footer /> */}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
