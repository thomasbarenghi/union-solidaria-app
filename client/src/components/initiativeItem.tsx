import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  image: string;
  location: string;
};

export default function InitiativeItem({ title, image, location }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/initiatives/1");
  };

  return (
    <div className="flex flex-col w-full" onClick={handleClick}>
      <div className="flex flex-col gap-2 w-full ">
        <div className="relative l w-full  aspect-[3/4]">
          <Image
            src={image}
            fill
            alt="Vercel Logo"
            className="object-cover aspect-[3/4] rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="bodyText font-medium">{title}</h1>
            <p className="text-sm font-light">{location}</p>
          </div>
          <button className="border-b w-max text-green-800 border-green-800 text-sm">
            Inscríbete ahora
          </button>
        </div>
      </div>
    </div>
  );
}
