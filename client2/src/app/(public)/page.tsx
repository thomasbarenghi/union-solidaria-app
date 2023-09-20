import HeroSection from "./components/hero";
import InitiativesSection from "./components/initiatives";
import MarketingSection from "./components/marketing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <article className="section-padding-1 container-section article-layout-1">
        <InitiativesSection />
        <MarketingSection />
      </article>
    </>
  );
}
