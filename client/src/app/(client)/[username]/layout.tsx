"use client";

import Hero from "./layoutComponents/hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
