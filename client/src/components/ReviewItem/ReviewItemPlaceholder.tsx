const ReviewItem = () => (
  <div className='relative flex w-full cursor-pointer flex-col justify-center gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
    <div className='flex items-center gap-2'>
      <div className='h-[35px] w-[35px] rounded-full bg-gray-100' />
      <div className='h-[15px] w-[60px] rounded-full bg-gray-100' />
    </div>
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-1'>
        <div className='h-[15px] w-[95%] rounded-full bg-gray-100' />
        <div className='h-[15px] w-[85%] rounded-full bg-gray-100' />
        <div className='h-[15px] w-[75%] rounded-full bg-gray-100' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <div className='h-[15px] w-[120px] rounded-full bg-gray-100' />
          <div className='h-[15px] w-[100px] rounded-full bg-gray-100' />
        </div>
        <p className='bodyText font-light text-black'>
          <div className='h-[15px] w-[75px] rounded-full bg-gray-100' />
        </p>
      </div>
    </div>
  </div>
)

export default ReviewItem
