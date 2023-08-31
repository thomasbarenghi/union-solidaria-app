import { InitiativeItem } from "@/components";

type Props = {
  initiatives: any;
};

export default function InitiativeGrid({ initiatives }: Props) {
  return (
    <div className="grid grid-cols-2  gap-5">
      {initiatives.map((item: any) => (
        <InitiativeItem
          title={item.title}
          image={item.image}
          location={item.location}
        />
      ))}
    </div>
  );
}
