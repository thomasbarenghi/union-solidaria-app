const PublicationItemPlaceholder = () => (
  <div className='relative flex w-full cursor-pointer flex-col items-start gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
    <div className='flex items-center justify-start gap-2'>
      <div className='h-[40px] w-[40px] rounded-full bg-gray-100' />
      <div className='flex flex-col gap-[4px] '>
        <div className='h-[15px] w-[100px] rounded-full bg-gray-100' />
        <div className='h-[10px] w-[60px] rounded-full bg-gray-100' />
      </div>
    </div>
    <div className='flex w-full flex-col gap-1'>
      <div className='h-[15px] w-[100%] rounded-full bg-gray-100' />
      <div className='h-[15px] w-[85%] rounded-full bg-gray-100' />
      <div className='h-[15px] w-[75%] rounded-full bg-gray-100' />
      <div className='h-[15px] w-[65%] rounded-full bg-gray-100' />
    </div>
    <div>
      <div className='h-[15px] w-[100px] rounded-full bg-gray-100' />
    </div>
  </div>
)

export default PublicationItemPlaceholder
