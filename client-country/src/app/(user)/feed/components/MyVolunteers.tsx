import MyVolunteerCard from './MyVolunteerCard'
const myVolunteers = [
  {
    nameOrganitation: 'Amigos de la Playa',
    title: 'Ayudantes de limpieza en la playa',
    imgVolunteer:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    nameOrganitation: 'Amigos de la Playa',
    title: 'Ayudantes de limpieza en la playa',
    imgVolunteer:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    nameOrganitation: 'Amigos de la Playa',
    title: 'Ayudantes de limpieza en la playa',
    imgVolunteer:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    nameOrganitation: 'Amigos de la Playa',
    title: 'Ayudantes de limpieza en la playa',
    imgVolunteer:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }
]
const MyVolunteers = () => {
  return (
    <div className='sm:container-[1148px] container mx-auto flex flex-grow items-center justify-center px-4 py-4 sm:py-16'>
      <div className='w-full self-stretch px-4 md:w-4/5'>
        <div className='flex-no-wrap scrolling-touch mb-8 flex items-start overflow-x-scroll'>
          {myVolunteers.map((element, index) => (
            <MyVolunteerCard
              key={index}
              nameOrganitation={element.nameOrganitation}
              title={element.title}
              imgVolunteer={element.imgVolunteer}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default MyVolunteers
