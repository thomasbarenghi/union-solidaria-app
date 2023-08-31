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
    <div className="px-6 py-14 flex flex-col gap-6">
      <Tabs content={tabsContent} />
    </div>
  );
}
