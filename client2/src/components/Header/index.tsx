import Image from "next/image";
import { Nav, ProfileAction } from "@/components";
import { itemsNav } from "./lib/itemsNav";

type Props = {
  theme?: "dark" | "light";
  layout?: "simple" | "full";
};

export default function Header({ theme = "light", layout = "full" }: Props) {
  const logoSrc = `/icon/logo-${theme === "dark" ? "dark" : "light"}.svg`;

  return (
    <header className="py-8 flex fixed z-50 section-padding-1 justify-center w-full bg-transparent">
      <div className="w-full justify-between items-center flex 2xl:container">
        <Image src={logoSrc} alt="Vercel Logo" width={185} height={35} />
        {layout === "full" && (
          <div className="flex items-center">
            <Nav
              items={itemsNav}
              className="hidden lg:flex"
              mode="horizontal"
              gap="gap-6"
              centerAbsolute={true}
              textStyles="text-white font-light"
            />
            <ProfileAction />
          </div>
        )}
      </div>
    </header>
  );
}
