import { PublicationCard } from '@/components'

interface Props {
  postsId: string[]
}

const Publications = (props: Props) => {
  const { postsId } = props

  const pandaImg =
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
  const ostrich =
    'https://images.unsplash.com/photo-1682687220945-922198770e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

  return (
    <section className='mb-6'>
      <h3 className='mb-3 text-xl text-blue-600'>Publicaciones</h3>
      <div>
        {postsId.length === 0 ? (
          <p>Nada por aquí</p>
        ) : (
          <PublicationCard
            avatar={pandaImg}
            description='description description description description '
            organitationName='Organization name'
            publicationImg={ostrich}
            timeElapsed='time elapsed'
            title='Title'
          />
        )}
      </div>
    </section>
  )
}

export default Publications
