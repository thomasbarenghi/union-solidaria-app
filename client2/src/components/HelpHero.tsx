import { Hero } from "@/components";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function HelpHero({ imageSrc, title, description }: Props) {
  return (
    <Hero imageSrc={imageSrc} height="min-h-[50vh]">
      <div className="w-full flex flex-col  gap-1">
        <h1 className="text-start   w-full titulo-2 font-light text-white">
          {title}
        </h1>
        <p className="text-start   w-full bodyText font-light text-white">
          {description}
        </p>
      </div>
    </Hero>
  );
}
