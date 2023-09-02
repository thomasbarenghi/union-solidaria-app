"use client";
import { Tabs } from "@/components";
import Privacy from "./privacy";
import Terms from "./terms";

const tabsContent = [
  {
    title: "Términos y condiciones",
    content: <Terms />,
  },
  {
    title: "Política de privacidad",
    content: <Privacy />,
  },
];

export default function Content() {
  return (
    <section className="w-full flex flex-col gap-6">
      <Tabs content={tabsContent} />
    </section>
  );
}
