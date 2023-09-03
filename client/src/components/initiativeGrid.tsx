import { InitiativeItem } from "@/components";

type Props = {
  initiatives: any;
};

export default function InitiativeGrid({ initiatives }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 lg:gap-y-9">
            {initiatives.map((item: any) => (
        <InitiativeItem
        id={item.id}
          title={item.title}
          image={item.thumbnail}
          location={item.locations}
        />
      ))}
    </div>
  );
}
