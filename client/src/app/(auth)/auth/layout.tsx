"use client";
import { Header, BottomBar } from "@/components";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header theme="dark" />
      <main className="flex flex-col min-h-screen pb-[100px] ">{children}</main>
    </>
  );
}
