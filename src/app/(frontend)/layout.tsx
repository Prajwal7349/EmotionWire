import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TrackingScripts from "@/components/TrackingScripts";

const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "EmotionWire | Neuroscience-powered branding",
    description: "At EmotionWire, we decode your buyers' minds before they even know what drives them.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We don't have sanity blogs anymore, just defaulting hasBlogs to false
  const hasBlogs = false;

  return (
    <html lang="en" className={cantarell.variable} data-scroll-behavior="smooth">
      <body>
        <TrackingScripts tags="" />
        <div className="mainLayout">
          <Sidebar hasBlogs={hasBlogs} />
          <main className="contentWrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
