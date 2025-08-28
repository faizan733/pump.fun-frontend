// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Pump Board",
  description: "Trending coins, sorting and discovery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Floating sidebar is fixed; we just reserve a tiny rail space on md+ */}
        <Sidebar />

        <div className="min-h-screen">
          <TopBar />
          {/* match TopBar height; also reserve rail space only on md+ */}
          <main className="pt-16 md:pl-[80px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
