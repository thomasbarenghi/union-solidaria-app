import Link from "next/link";

type VerticalNavProps = {
  items: VerticalNavItemProps[];
  itemClassName?: string;
};

type VerticalNavItemProps = {
  name: string;
  href: string;
  visible: boolean;
};

export default function VerticalNav({
  items,
  itemClassName = "",
}: VerticalNavProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <>
          {item.visible && (
            <Link href={item.href} key={index}>
              <p className={`${itemClassName}`}>{item.name}</p>
            </Link>
          )}
        </>
      ))}
    </div>
  );
}
