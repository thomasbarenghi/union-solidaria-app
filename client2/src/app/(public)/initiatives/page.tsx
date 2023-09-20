import HeroSection from './components/hero'
import InitiativesSection from './components/initiatives'

const Home = () => (
  <>
    <HeroSection />
    <article className='section-padding-1 container-section article-layout-1'>
      <InitiativesSection />
    </article>
  </>
)

export default Home
