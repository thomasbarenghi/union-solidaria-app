"use client";
import { Tabs } from "@/components";

const tabsContent = [
  {
    title: "Mis iniciativas",
    content: <></>,
  },
  {
    title: "Certificados",
    content: <></>,
  },
];

export default function Content() {
  return (
    <section className=" flex flex-col gap-6">
      <Tabs content={tabsContent} />
    </section>
  );
}
