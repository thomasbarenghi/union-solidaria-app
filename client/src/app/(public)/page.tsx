import Hero from "./components/hero";
import Initiatives from "./components/initiatives";
import Marketing from "./components/marketing";

export default function Home() {
  return (
    <>
      <Hero />
      <article className="section-padding-1 container-section article-layout-1">
        <Initiatives />
        <Marketing />
      </article>
    </>
  );
}
