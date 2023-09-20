import { InitiativeInterface } from "@/interfaces";
import Routes from "@/utils/constants/routes.const";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: InitiativeInterface;
  key: number;
}

export default function InitiativeItem({ item, key }: Props) {
  return (
    <Link href={Routes.INDIVIDUAL_INITIATIVE(item.id)}>
      <div className="cursor-pointer flex flex-col w-full" key={key}>
        <div className="flex flex-col gap-2 w-full ">
          <div className="relative l w-full  aspect-[1/1]">
            <Image
              src={item.thumbnail}
              fill
              alt="Vercel Logo"
              className="object-cover aspect-[1/1] rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="bodyText font-medium">{item.title}</h1>
              <p className="text-sm font-light">
                {item.country}, {item.province}{" "}
              </p>
            </div>
            <button className="border-b w-max text-green-800 border-green-800 text-sm">
              Inscríbete ahora
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
