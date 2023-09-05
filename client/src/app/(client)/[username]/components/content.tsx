"use client";
import { Tabs } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import {
  currentActiveUserSelector,
  currentUserSelector,
} from "@/redux/selectors/users";

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
  const currentActiveUser = useAppSelector(currentActiveUserSelector);
  const currentUser = useAppSelector(currentUserSelector);
  const isCurrent = currentActiveUser?.username === currentUser?.username;
  const isOrg = currentActiveUser?.role === "organization";

  return (
    <section className="w-full flex flex-col gap-6 min-h-[100vh] bg-white ">
      <Tabs content={tabsContent} />
    </section>
  );
}
