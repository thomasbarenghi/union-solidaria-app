import Image from "next/image";

function OrganizationInfo() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="w-full titulo-3 font-medium">Organización</h1>
      <div className="flex flex-col gap-2">
        <p className="bodyText font-light">
          Carpinchos Felices ORG es una organización sin fines de lucro que
          busca proteger la especie capibara.
        </p>
        <p className="bodyText font-light">
          El responsable de esta organización es{" "}
          <b className="font-semibold">Federico Hernández</b> y su identidad fue
          verificada por Unión Solidaria.
        </p>
      </div>
    </div>
  );
}

function InitiativeGeneralInfo() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="w-full titulo-3 font-medium">Descripcion</h1>
      <div className="flex flex-col gap-2">
        <p className="bodyText font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pellentesque ornare est, sagittis laoreet ante tincidunt sit amet.
          Donec efficitur felis id euismod porta. Duis sed est scelerisque,
          rutrum orci id, gravida ligula. Vestibulum gravida efficitur
          ultricies. Cras porta viverra erat, nec tempus nunc posuere imperdiet.
        </p>
      </div>
    </div>
  );
}

type Props = {
  icon: string;
  text: string;
};

function DateInfoItem({ icon, text }: Props) {
  return (
    <div className="flex gap-2">
      <Image src={icon} width={24} height={24} alt="Vercel Logo" />
      <p className="bodyText font-light">{text}</p>
    </div>
  );
}

function InitiativeDateInfo() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="w-full titulo-3 font-medium">Información</h1>
      <div className="flex flex-col gap-4">
        <DateInfoItem icon="/icon/calendar.svg" text="Sábado 26 de agosto" />
        <DateInfoItem icon="/icon/location.svg" text="Ecoparque Tigre" />
        <DateInfoItem icon="/icon/info.svg" text="Llevar ropa fresca" />
      </div>
    </div>
  );
}

export default function Info() {
  return (
    <div className="px-6 py-14 flex flex-col gap-6">
      <OrganizationInfo />
      <InitiativeGeneralInfo />
      <InitiativeDateInfo />
    </div>
  );
}
