import Image from "next/image";

type AuthBaseProps = {
  children: React.ReactNode;
  image: string;
};

export default function AuthBase({ children, image }: AuthBaseProps) {
  return (
    <section className="flex col-center ">
      <div className="grid grid-cols-[auto,60%] min-h-screen w-full">
        <div className="col-center  px-[40px]  ">
          <div className="w-[75%] ">{children}</div>
        </div>
        <div className="w-full h-full relative bg-emerald-200  overflow-hidden ">
          <div className="absolute z-[1] top-0 left-0 w-full flex justify-start p-10 items-end h-full bg-[#00000069] ">
            <p className="titulo-3 text-white font-normal ">
              Juntos podemos <br />{" "}
              <span className="font-semibold">hacer la diferencia.</span>{" "}
            </p>
          </div>
          <Image src={image} alt="bg" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
