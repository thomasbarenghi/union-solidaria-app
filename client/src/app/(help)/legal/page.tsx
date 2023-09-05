import Content from "./components/content";
import { HelpHero } from "@/components";

export default function Home() {
  return (
    <>
      <HelpHero
        title="Al usar nuestro servicio aceptas nuestros terminos, y nos permites garantizar tu seguridad."
        description="En nuestro centro de ayuda encontrarás las respuestas a las preguntas más frecuentes, como también podrás contactarnos para resolver tus dudas."
        imageSrc="https://images.unsplash.com/photo-1593132517397-ceb31d77194a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
      />
      <article className="section-padding-1 container-section article-layout-1">
        <Content />
      </article>
    </>
  );
}
