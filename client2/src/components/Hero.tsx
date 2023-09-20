import Image from "next/image";

type Props = {
  imageSrc: string;
  height?: string;
  children: React.ReactNode;
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
};

export default function Hero({
  imageSrc,
  height = "h-[55vh]",
  gap = "gap-4",
  children,
  justifyContent = "justify-center",
  alignItems = "items-center",
}: Props) {
  return (
    <article
      className={`${height} ${justifyContent} ${alignItems} container-section section-padding-1 relative flex rounded-br-[40px] overflow-hidden`}
    >
      <div className="absolute h-full w-full top-0 left-0 z-[1]  bg-[#0000005e] "></div>
      <Image fill src={imageSrc} alt="Vercel Logo" className="object-cover" />
      <section className={`z-[20] w-full flex flex-col ${gap} mt-6`}>
        {children}
      </section>
    </article>
  );
}
