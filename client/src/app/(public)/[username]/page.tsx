import Hero from "./components/hero";
import Content from "./components/content";

export default function Profile() {
  return (
    <>
      <Hero />
      <article className="section-padding-1 container-section article-layout-1">
        <Content />
      </article>
    </>
  );
}
