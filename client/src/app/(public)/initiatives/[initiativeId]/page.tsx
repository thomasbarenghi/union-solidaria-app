import Hero from "./components/hero";
import Info from "./components/info";

export default function Home() {
  return (
    <>
      <Hero />
      <article className="section-padding-1 container-section article-layout-1">
        <Info />
      </article>
    </>
  );
}
