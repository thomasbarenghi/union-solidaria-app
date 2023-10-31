export interface TechnologyItem {
  title: string
  image: string
  description: string
}

export const technologies: TechnologyItem[] = [
  {
    title: 'TypeScript',
    image: '/icon/tech/typescript.svg',
    description:
      'TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript y agrega tipos estáticos opcionales a la sintaxis de JavaScript.'
  },
  {
    title: 'NextJS',
    image: '/icon/tech/next-js.svg',

    description:
      'Next.js es un framework de React para la construcción de aplicaciones web de alto rendimiento y de alto rendimiento. Next.js te ayuda a crear aplicaciones web de una sola página con React fácilmente.'
  },
  {
    title: 'Figma',
    image: '/icon/tech/figma.svg',
    description:
      'Figma es una herramienta de diseño de interfaz de usuario (UI) basada en la nube que permite a los diseñadores y equipos de diseño colaborar en tiempo real. '
  },
  {
    title: 'TailwindCSS',
    image: '/icon/tech/tailwindcss.svg',

    description:
      'Tailwind CSS es un framework de CSS de bajo nivel que te ayuda a crear diseños de interfaz de usuario (UI) de manera rápida y sencilla. Con Tailwind CSS, puedes crear diseños de interfaz de usuario (UI) personalizados sin tener que escribir CSS.'
  },
  {
    title: 'NestJS',
    image: '/icon/tech/nest.svg',
    description:
      'NestJS es un framework de Node.js para la construcción de aplicaciones web de servidor eficientes, confiables y escalables. NestJS utiliza TypeScript como lenguaje de programación predeterminado.'
  },
  {
    title: 'MongoDB',
    image: '/icon/tech/mongo.svg',
    description:
      'MongoDB es una base de datos NoSQL de código abierto que se utiliza para almacenar datos en documentos JSON.'
  },

  {
    title: 'Cloudinary',
    image: '/icon/tech/cloudinary.svg',

    description:
      'Cloudinary es un servicio de gestión de medios en la nube que permite a los usuarios almacenar, administrar y entregar imágenes y videos de manera eficiente.'
  }
]
