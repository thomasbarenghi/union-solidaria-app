'use client'
import Edit from './components/form'
import HeroSec from './components/hero'

const Account = () => (
  <>
    <HeroSec />
    <article className='section-padding-1 container-section article-layout-1 listContainer'>
      <section className='flex w-full flex-col gap-6'>
        <h1 className='titulo-3 font-semibold'>Editar perfil</h1>
        <Edit />
      </section>
    </article>
  </>
)

export default Account
