"use client";

type ContentItem = {
  title: string;
  description: string;
};

const contentData: ContentItem[] = [
  {
    title: "✨ Conexiones Significativas",
    description:
      "En Unión Solidaria, creemos que cada acción cuenta. Conéctate con organizaciones sin fines de lucro que comparten tu pasión y compromiso por hacer del mundo un lugar mejor.",
  },
  {
    title: "✨ Oportunidades Auténticas",
    description:
      "Olvídate de las preocupaciones. Todas las oportunidades de voluntariado en nuestra plataforma son verificadas y auténticas, lo que significa que tu tiempo se invertirá en proyectos con un impacto real.",
  },
  {
    title: "✨ Impacto Medible",
    description:
      "En Unión Solidaria, creemos en medir y celebrar el cambio. Cada hora que dedicas, cada sonrisa que compartes y cada contribución que haces se suma para crear un impacto medible y duradero.",
  },
];

function ContentItem({ title, description }: ContentItem) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="subtitulo font-semibold">{title}</h3>
      <p className="textBody font-light">{description}</p>
    </div>
  );
}

export default function Marketing() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="titulo-3 font-light">
        Únete a nuestra{" "}
        <b className="font-semibold"> revolución de solidaridad</b>
      </h1>
      <div className="grid-layout-3">
        {contentData.map((item: ContentItem) => {
          return (
            <ContentItem title={item.title} description={item.description} />
          );
        })}
      </div>
    </section>
  );
}
