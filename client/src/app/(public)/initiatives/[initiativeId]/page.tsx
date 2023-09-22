import Hero from './components/hero'
import Content from './components/content'

interface Props {
  params: {
    initiativeId: string
  }
}

const Home = ({ params }: Props) => (
  <>
    <Hero id={params.initiativeId} />
    <article className='section-padding-1 container-section article-layout-1'>
      <Content id={params.initiativeId} />
    </article>
  </>
)

export default Home
