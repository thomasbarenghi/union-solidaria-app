"use client";
import { Header, BottomBar } from "@/components";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <main className="flex flex-col min-h-screen pb-[100px] ">
      <Header />
      {children}
      <BottomBar />
    </main>
  );
}
