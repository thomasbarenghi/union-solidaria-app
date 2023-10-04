export interface TechnologyItem {
  title: string
  image: string
  description: string
}

export const technologies: TechnologyItem[] = [
  {
    title: 'NextJS',
    image: '/icon/tech/next-js.svg',

    description:
      'Next.js es un framework de React para la construcción de aplicaciones web de alto rendimiento y de alto rendimiento. Next.js te ayuda a crear aplicaciones web de una sola página con React fácilmente.'
  },
  {
    title: 'Redux Toolkit',
    image: '/icon/tech/redux.svg',
    description:
      'Redux es una librería de gestión de estado para aplicaciones JavaScript de una sola página (SPA). Se utiliza principalmente con React, pero también se puede utilizar con otras bibliotecas o marcos de trabajo de JavaScript. Redux se basa en la arquitectura Flux y se centra en la idea de que el estado de la aplicación debe ser centralizado y predecible.'
  },
  {
    title: 'Postman',
    image: '/icon/tech/postman.svg',
    description:
      'Postman es una herramienta de colaboración para diseñar, probar y documentar las API. Con Postman puedes enviar solicitudes HTTP a un servidor web y recibir respuestas. Puedes organizar tus solicitudes en colecciones y agregar tests automatizados a tus solicitudes para asegurarte de que tus API funcionan correctamente.'
  },
  {
    title: 'Sass',
    image: '/icon/tech/sass.svg',
    description:
      'Sass es un preprocesador de CSS que permite escribir código CSS de manera más eficiente y estructurada. Con Sass, puedes utilizar variables, anidamiento de selectores, mixins, funciones y operadores matemáticos, lo que facilita la escritura y el mantenimiento de hojas de estilo. Además, Sass permite la creación de archivos parciales que se pueden importar en otros archivos para una mayor modularidad y reutilización de código.'
  },
  {
    title: 'Figma',
    image: '/icon/tech/figma.svg',
    description:
      'Figma es una herramienta de diseño de interfaz de usuario (UI) basada en la nube que permite a los diseñadores y equipos de diseño colaborar en tiempo real. Figma cuenta con una interfaz intuitiva y fácil de usar que permite crear diseños, prototipos y animaciones interactivas. Figma también ofrece una amplia variedad de recursos, como iconos, componentes, plantillas y complementos, que facilitan la creación de diseños de alta calidad de manera más rápida y eficiente.'
  },
  {
    title: 'TailwindCSS',
    image: '/icon/tech/tailwindcss.svg',

    description:
      'Tailwind CSS es un framework de CSS de bajo nivel que te ayuda a crear diseños de interfaz de usuario (UI) de manera rápida y sencilla. Con Tailwind CSS, puedes crear diseños de interfaz de usuario (UI) personalizados sin tener que escribir CSS.'
  },
  {
    title: 'Spring Boot',
    image: '/icon/tech/spring.svg',
    description:
      'Spring Boot es un framework de Java que se utiliza para crear aplicaciones web y servicios web. Spring Boot proporciona una configuración predeterminada para que puedas comenzar a desarrollar aplicaciones web de inmediato. Spring Boot también proporciona una amplia gama de bibliotecas y complementos que facilitan el desarrollo de aplicaciones web.'
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
  },

  {
    title: 'Render',
    image: '/icon/tech/render.svg',

    description:
      'Render.com es una plataforma en la nube que ofrece servicios de renderizado y despliegue de aplicaciones. Permite a los desarrolladores y diseñadores ejecutar y escalar fácilmente aplicaciones web, servicios backend y trabajos de renderizado en la nube, sin la necesidad de administrar la infraestructura subyacente.'
  }
]
