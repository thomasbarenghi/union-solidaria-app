"use client";
import { Header, BottomBar, Footer } from "@/components";
import HOC from "@/services/securityHoc";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HOC>{children}</HOC>
      {/* <BottomBar /> */}
      <Footer />
    </main>
  );
}
