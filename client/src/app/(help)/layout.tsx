"use client";
import { Header, BottomBar, Footer } from "@/components";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {children}
      {/* <BottomBar /> */}
      <Footer />
    </main>
  );
}
