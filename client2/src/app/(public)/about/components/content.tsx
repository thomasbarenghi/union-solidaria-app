import {
  missionAndVision,
  MissionAndVisionItem,
} from "../lib/missionAndVision";

interface ContentItemProps {
  title: string;
  description: string;
  key: number;
}

function ContentItem({ title, description, key }: ContentItemProps) {
  return (
    <div className="flex flex-col gap-1" key={key}>
      <h3 className="subtitulo font-semibold">{title}</h3>
      <p className="textBody font-light">{description}</p>
    </div>
  );
}

export default function MissionVisionSection() {
  return (
    <section className="grid-layout-3">
      {missionAndVision.map((item: MissionAndVisionItem, index) => {
        return (
          <ContentItem
            title={item.title}
            key={index}
            description={item.description}
          />
        );
      })}
    </section>
  );
}
