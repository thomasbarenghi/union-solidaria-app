"use client";

type ContentItem = {
  title: string;
  description: string;
};

const contentData: ContentItem[] = [
  {
    title: "Misión y Visión",
    description:
      "Nuestra misión es crear un espacio en el que individuos comprometidos puedan encontrar oportunidades significativas para contribuir a la sociedad. Visualizamos un mundo donde la solidaridad y la colaboración son los pilares de un cambio positivo y duradero.",
  },
  {
    title: "¿Por Qué Elegir Unión Solidaria?",
    description:
      "Cada oportunidad de voluntariado que se presenta en nuestra plataforma ha sido verificada cuidadosamente para garantizar su legitimidad. Creemos en la importancia de elegir oportunidades de voluntariado que resuenen con tus valores y habilidades, y estamos aquí para ayudarte en ese proceso.",
  },
  {
    title: "Nuestro Equipo",
    description:
      "Detrás de Unión Solidaria hay un equipo apasionado y comprometido, conformado por individuos que comparten la creencia en el poder del voluntariado para el cambio social. Nos esforzamos por crear una experiencia en la aplicación que refleje este compromiso y que inspire a más personas a unirse a nosotros en este viaje.",
  },
];

function ContentItem({ title, description }: ContentItem) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="titulo-3 font-semibold">{title}</h3>
      <p className="textBody font-light">{description}</p>
    </div>
  );
}

export default function HeroSec() {
  return (
    <div className="px-6 py-14 flex flex-col gap-10">
      {contentData.map((item: ContentItem) => {
        return (
          <ContentItem title={item.title} description={item.description} />
        );
      })}
    </div>
  );
}
