const InitiativeItemPlaceholder = () => (
  <div className='flex w-full cursor-pointer flex-col'>
    <div className='flex w-full flex-col gap-4 '>
      <div className='relative aspect-[1/1]  w-full'>
        <div className='absolute aspect-[1/1] h-full w-full rounded-2xl  bg-gray-100' />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <div className='h-[20px] w-[150px] rounded-full bg-gray-100' />
          <div className='h-[15px] w-[120px] rounded-full bg-gray-100' />
        </div>
        <div className='h-[15px] w-[100px] rounded-full bg-gray-100' />
      </div>
    </div>
  </div>
)

export default InitiativeItemPlaceholder
