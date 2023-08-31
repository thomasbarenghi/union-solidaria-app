import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { VerticalNav } from "@/components";

type HamburgerMenuProps = {
  childrenTrigger?: JSX.Element;
  itemsNav?: any;
};

export default function HamburgerMenu({
  childrenTrigger,
  itemsNav,
}: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen ? (
        <>
          {!true ? (
            <div className="lg:hidden" onClick={handleClick}>
              <Image
                src="/icon/hamburger.svg"
                alt="hamburger"
                fill
                width={30}
                height={30}
                className="cursor-pointer aspect-[1/1]"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2" onClick={handleClick}>
              {childrenTrigger}
            </div>
          )}
        </>
      ) : (
        <>
          {createPortal(
            <div className="fixed right-0 top-0 z-[1000] flex h-screen w-screen items-center justify-center bg-[#ffffff] backdrop-blur-lg lg:hidden">
              <Image
                src="/icon/cross.svg"
                alt="close"
                width={20}
                height={20}
                onClick={handleClick}
                className="absolute right-4 top-8 cursor-pointer"
              />
              <div className="seccion1-x-padding flex w-full flex-col gap-5">
                <div className="flex w-full flex-col gap-2">
                  <p className="smalltext text-green-800">MENU</p>
                  <VerticalNav
                    items={itemsNav}
                    itemClassName="titulo-3 font-normal"
                  />
                </div>
                <div>
                  <p className="smalltext text-green-800">CONTACTO</p>
                  <p className="bodyText font-light">ayuda@u-solidaria.com</p>
                </div>
              </div>
            </div>,
            document.body,
          )}
        </>
      )}
    </>
  );
}
