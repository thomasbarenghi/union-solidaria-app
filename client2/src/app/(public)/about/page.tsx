import HeroSection from "./components/hero";
import MissionVisionSection from "./components/content";

export default function Home() {
  return (
    <>
      <HeroSection />
      <article className="section-padding-1 container-section article-layout-1">
        <MissionVisionSection />
      </article>
    </>
  );
}
