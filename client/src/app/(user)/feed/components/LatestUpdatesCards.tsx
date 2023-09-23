import { PublicationCard } from '@/components'

function LatestUpdatesCards() {
  const publications = [
    {
      avatar:
        'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60',
      organitationName: 'Amigos de la Playa',
      title: 'Ayudantes de limpieza en la playa',
      publicationImg:
        'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        'Hola amigos! Queríamos recordarles que mañana a las 10 empieza la jornada de limpieza de la playa. El pronóstico pinta bueno, asi que recuerden llevar gorra, protector solar, agua y muchas ganas de ayudar, los  esperamos!',
      timeElapsed: 'Hace 4 horas'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60',
      organitationName: 'Amigos de la Playa',
      title: 'Ayudantes de limpieza en la playa',
      publicationImg:
        'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        'Hola amigos! Queríamos recordarles que mañana a las 10 empieza la jornada de limpieza de la playa. El pronóstico pinta bueno, asi que recuerden llevar gorra, protector solar, agua y muchas ganas de ayudar, los  esperamos!',
      timeElapsed: 'Hace 4 horas'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60',
      organitationName: 'Amigos de la Playa',
      title: 'Ayudantes de limpieza en la playa',
      publicationImg:
        'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        'Hola amigos! Queríamos recordarles que mañana a las 10 empieza la jornada de limpieza de la playa. El pronóstico pinta bueno, asi que recuerden llevar gorra, protector solar, agua y muchas ganas de ayudar, los  esperamos!',
      timeElapsed: 'Hace 4 horas'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60',
      organitationName: 'Amigos de la Playa',
      title: 'Ayudantes de limpieza en la playa',
      publicationImg:
        'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        'Hola amigos! Queríamos recordarles que mañana a las 10 empieza la jornada de limpieza de la playa. El pronóstico pinta bueno, asi que recuerden llevar gorra, protector solar, agua y muchas ganas de ayudar, los  esperamos!',
      timeElapsed: 'Hace 4 horas'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60',
      organitationName: 'Amigos de la Playa',
      title: 'Ayudantes de limpieza en la playa',
      publicationImg:
        'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        'Hola amigos! Queríamos recordarles que mañana a las 10 empieza la jornada de limpieza de la playa. El pronóstico pinta bueno, asi que recuerden llevar gorra, protector solar, agua y muchas ganas de ayudar, los  esperamos!',
      timeElapsed: 'Hace 4 horas'
    }
  ]
  return (
    <section className='flex w-full items-center justify-center'>
      <div className='container flex flex-col gap-5'>
        <div className='flex w-full flex-col items-center justify-center gap-4'>
          {publications.map((element, index) => (
            <PublicationCard
              key={index}
              avatar={element.avatar}
              organitationName={element.organitationName}
              title={element.title}
              publicationImg={element.publicationImg}
              description={element.description}
              timeElapsed={element.timeElapsed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default LatestUpdatesCards
