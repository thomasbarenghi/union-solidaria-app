"use client";
import Edit from "./components/edit";
import Security from "./components/security";
import { Tabs } from "@/components";

export default function Page() {
  const tabsContent = [
    {
      title: "Editar perfil",
      content: <Edit />,
    },
    {
      title: "Editar contraseña",
      content: <Security />,
    },
  ];

  return (
    <>
      <section className="w-full flex flex-col gap-6">
        <Tabs content={tabsContent} />
      </section>
    </>
  );
}
