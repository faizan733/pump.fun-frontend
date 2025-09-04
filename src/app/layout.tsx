// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

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
        <Sidebar />

        <div
          className="min-h-screen"
          style={{ marginLeft: "var(--sidebar-w)" }}
        >
          {/* TopBar now starts after sidebar */}
          <TopBar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
