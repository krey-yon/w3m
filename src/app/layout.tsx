import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Ndot = localFont({
  src: "/font/Sis-JpRJm.ttf",
  variable: "--font-ndot",
});

const DotzBold = localFont({
  src: "/font/DotzPersonalUseBold-z81Z3.ttf",
  variable: "--font-dotz-bold",
});

export const metadata: Metadata = {
  title: "Vikas | Portfolio",
  description:
    "Full-stack developer passionate about creating and delivering projects that make a real-world impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Ndot.variable} ${geistMono.variable} ${DotzBold.variable} font-sans antialiased`}
      >
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-black">
            {/* More Floating dots */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-green-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-white/15 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-400/15 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400/10 rounded-full animate-bounce"></div>

            {/* Additional floating dots */}
            <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-white/8 rounded-full animate-ping"></div>
            <div className="absolute top-80 right-1/4 w-1 h-1 bg-green-400/12 rounded-full animate-pulse"></div>
            <div className="absolute bottom-60 left-20 w-2 h-2 bg-white/6 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400/8 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-white/12 rounded-full animate-pulse"></div>
            <div className="absolute top-32 left-2/3 w-1 h-1 bg-green-400/18 rounded-full animate-bounce"></div>
            <div className="absolute bottom-80 left-1/2 w-2 h-2 bg-white/8 rounded-full animate-ping"></div>
            <div className="absolute top-2/3 right-20 w-1.5 h-1.5 bg-green-400/14 rounded-full animate-pulse"></div>
            <div className="absolute bottom-24 left-2/3 w-1 h-1 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute top-24 right-1/2 w-1.5 h-1.5 bg-green-400/16 rounded-full animate-ping"></div>

            {/* More subtle dots */}
            <div className="absolute top-1/4 left-1/6 w-0.5 h-0.5 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-0.5 h-0.5 bg-green-400/8 rounded-full animate-bounce"></div>
            <div className="absolute top-3/4 left-5/6 w-0.5 h-0.5 bg-white/6 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 left-1/12 w-0.5 h-0.5 bg-green-400/5 rounded-full animate-pulse"></div>
            <div className="absolute top-5/6 right-1/12 w-0.5 h-0.5 bg-white/4 rounded-full animate-bounce"></div>

            {/* Enhanced grid pattern */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full bg-grid-pattern"></div>
            </div>

            {/* Additional finer grid */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="w-full h-full bg-fine-grid-pattern"></div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/8 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-green-900/5 via-transparent to-transparent"></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
