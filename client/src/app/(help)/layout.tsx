"use client";
import { Header, Footer } from "@/components";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
