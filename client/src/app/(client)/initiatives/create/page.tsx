import FormSec from './components/form'
import HeroSec from './components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crear iniciativa | Unión Solidaria'
}

const FormPage = () => (
  <>
    <HeroSec />
    <article className='section-padding-1 container-section article-layout-1 listContainer'>
      <FormSec />
    </article>
  </>
)

export default FormPage
