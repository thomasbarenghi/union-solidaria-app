import HeroSection from './components/hero'
import MissionVisionSection from './components/content'
import TechnologiesSection from './components/technologies'

const About = () => (
  <>
    <HeroSection />
    <article className='section-padding-1 container-section article-layout-1'>
      <MissionVisionSection />
      <TechnologiesSection />
    </article>
  </>
)

export default About
