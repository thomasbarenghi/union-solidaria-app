import Image from 'next/image'

function MobileFooter() {
  return (
    <div className='space-y-1 py-6 text-center text-xs text-blue-600 2lg:hidden'>
      <h6 className='flex items-center justify-center'>
        Copyright © 2023
        <Image
          className='h-3 w-8 object-contain'
          src='/assets/logo-with-title.png'
          alt='Logo de Unión Solidaria'
          width={32}
          height={12}
        />
      </h6>
      <p>Todos los derechos reservados </p>
    </div>
  )
}

export default MobileFooter
