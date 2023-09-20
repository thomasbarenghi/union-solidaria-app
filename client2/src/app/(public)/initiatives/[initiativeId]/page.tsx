import Hero from "./components/hero";
import Info from "./components/info";

type Props = {
  params: {
    initiativeId: string;
  };
};

export default function Home({ params }: Props) {
  return (
    <>
      <Hero id={params.initiativeId} />
      <article className="section-padding-1 container-section article-layout-1">
        <Info id={params.initiativeId} />
      </article>
    </>
  );
}
