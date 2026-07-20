import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TrackingScripts from "@/components/TrackingScripts";
import { client } from "@/sanity/lib/client";

const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(`*[_type == "settings"][0]{ seo }`, {}, { next: { revalidate: 60 } });
  
  return {
    title: settings?.seo?.metaTitle || "EmotionWire | Neuroscience-powered branding",
    description: settings?.seo?.metaDescription || "At EmotionWire, we decode your buyers' minds before they even know what drives them.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(`*[_type == "settings"][0]`, {}, { next: { revalidate: 60 } });
  const hasBlogs = await client.fetch(`count(*[_type == "blog"]) > 0`, {}, { next: { revalidate: 60 } });

  return (
    <html lang="en" className={cantarell.variable} data-scroll-behavior="smooth">
      <body>
        <TrackingScripts tags={settings?.headTags} />
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
