import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "EmotionWire | Neuroscience-powered branding",
  description: "At EmotionWire, we decode your buyers' minds before they even know what drives them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cantarell.variable}>
      <body style={{ fontFamily: "var(--font-cantarell), sans-serif" }}>
        <div className="mainLayout">
          <Sidebar />
          <main className="contentWrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
