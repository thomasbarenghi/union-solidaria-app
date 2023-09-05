"use client";
import Hero from "./layoutComponents/hero";
import Section from "./layoutComponents/section";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero />
      <Section>{children}</Section>
    </>
  );
}
