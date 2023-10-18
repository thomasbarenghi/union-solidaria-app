const VolunteerItemPlaceholder = () => (
  <div className='relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
    <div className='flex items-center gap-4'>
      <div className='flex items-center justify-start gap-2'>
        <div className='h-[40px] w-[40px] rounded-full bg-gray-100' />
        <div className='flex flex-col gap-[4px] '>
          <div className='h-[15px] w-[100px] rounded-full bg-gray-100' />
          <div className='h-[10px] w-[60px] rounded-full bg-gray-100' />
        </div>
      </div>
      <div className='h-[15px] w-[50px] rounded-full bg-gray-100' />
    </div>
    <div className='flex gap-2'>
      <div className='h-[30px] w-[80px] rounded-full bg-gray-100' />
      <div className='h-[30px] w-[80px] rounded-full bg-gray-100 hidden lg:visible' />
    </div>
  </div>
)

export default VolunteerItemPlaceholder
