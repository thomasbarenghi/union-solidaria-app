import { usePathname, useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";

const spaceNavData = [
  {
    name: "Inicio",
    path: "/",
    linkPath: "/",
    visible: true,
    icon: "/icon/sidebar/inicio.svg",
  },
  {
    name: "Iniciativas",
    path: "/initiatives",
    linkPath: "/initiatives",
    visible: true,
    icon: "/icon/sidebar/iniciativas.svg",
  },
  {
    name: "Perfil",
    path: "/profile",
    linkPath: "/profile",
    visible: true,
    icon: "/icon/sidebar/perfil.svg",
  },
  {
    name: "Nosotros",
    path: "/about",
    linkPath: "/about",
    visible: true,
    icon: "/icon/sidebar/nosotros.svg",
  },
];

export default function BottomBar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (linkPath: string) => {
    router.push(linkPath);
  };

  return (
    <div className="seccion1-x-padding fixed bottom-[0px] left-0 right-0 z-[10] justify-between  bg-white lg:hidden">
      <div className="flex items-center justify-between gap-1 overflow-y-auto py-3">
        {spaceNavData.map((item: any, index: any) => {
          const stylesCurrent = pathname === item.path ? "bg-green-100" : "";
          return (
            <div
              key={item.name}
              className="centerInner w-full gap-1"
              onClick={() => handleClick(item.linkPath)}
            >
              <ReactSVG
                src={item.icon}
                className={`fill-current px-4 py-1  rounded-full ${stylesCurrent}  `}
              />
              <p className={`smalltext text-xs xs:text-sm  `}>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
