import type { Metadata } from 'next'
import { Cover, Description, InitiativeInfo, Labels, Photos, Publications, Volunteers } from './components'

export const metadata: Metadata = {
  title: 'Iniciativa Individual',
  description: '...',
  themeColor: '#000000'
}

function InitiativeDetailPage() {
  const pandaImg =
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
  const ostrich =
    'https://images.unsplash.com/photo-1682687220945-922198770e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

  return (
    <div className='flex w-full flex-col py-7'>
      <Cover />
      <Labels
        labels={{
          location: 'Buenos Aires, Arg',
          rate: 4.5,
          topic: 'Actividades ecologicas',
          opportunity: 'Medioambiente'
        }}
      />
      <Description description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa! Recusandae, numquam enim blanditiis qui quam, minima dolor deleniti unde corrupti harum quidem est ratione quibusdam repellat quas veritatis assumenda?' />
      <InitiativeInfo
        info={{
          date: 'Sábado 10 de octubre',
          desc: 'Al aire libre. Buscar la bandera azul.',
          location: 'Playa Varese. Av. Colón y la costa',
          time: '10:00hs a 15:00 hs'
        }}
      />
      <Photos imgUrls={[pandaImg, ostrich, pandaImg, ostrich, pandaImg]} />
      <Volunteers imgUrls={[pandaImg, ostrich, pandaImg, ostrich, pandaImg, ostrich, pandaImg, ostrich, pandaImg]} />
      <Publications />
    </div>
  )
}

export default InitiativeDetailPage
