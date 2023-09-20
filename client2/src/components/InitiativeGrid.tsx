import { InitiativeItem } from "@/components";
import { InitiativeInterface } from "@/interfaces";

type Props = {
  initiatives: Array<InitiativeInterface>;
};

export default function InitiativeGrid({ initiatives }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 lg:gap-y-9">
      {initiatives?.map((item: any) => (
        <InitiativeItem item={item} key={item.id} />
      ))}
    </div>
  );
}
