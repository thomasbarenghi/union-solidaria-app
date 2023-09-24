const InitiativeItemPlaceholder = () => (
  <div className='flex w-full cursor-pointer flex-col'>
    <div className='flex w-full flex-col gap-4 '>
      <div className='relative aspect-[1/1]  w-full'>
        <div className='absolute aspect-[1/1] bg-gray-100 h-full w-full  rounded-2xl' />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <div className='h-[20px] w-[150px] bg-gray-100 rounded-full' />
          <div className='h-[15px] w-[120px] bg-gray-100 rounded-full' />
        </div>
        <div className='h-[15px] w-[100px] bg-gray-100 rounded-full' />
      </div>
    </div>
  </div>
)

export default InitiativeItemPlaceholder
