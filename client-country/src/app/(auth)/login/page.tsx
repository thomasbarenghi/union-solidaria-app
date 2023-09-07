// 'use client'
// import { FacebookIcon, FormInput, GoogleIcon, Modal } from '@/components'
// import Image from 'next/image'
// import { useState } from 'react'
// import { LoginForm, ModalContent } from '@/app/(auth)/login/components'
// import { AnimatePresence } from 'framer-motion'

// export default function LoginPage() {
//   const [modalOpen, setModalOpen] = useState(false)

//   const close = () => setModalOpen(false)
//   const open = () => setModalOpen(true)

//   return (
//     <main className='flex h-screen w-screen items-center  bg-[#f5f5fa]'>
//       <section className='w-full p-6'>
//         <div className='mb-12 flex items-center justify-center py-10'>
//           <Image src='Logo.svg' width={130} height={130} alt='Logo Unión Solidaria' />
//           <h1 className='text-3xl'>
//             <span className='text-pink-500'>Unión</span>
//             <br />
//             <span className='text-blue-500'>Solidaria</span>
//           </h1>
//         </div>

//         {/* <LoginForm /> */}
//         <FormInput
//           type='text'
//           name='email'
//           label='Email'
//           // onChange={handleChange}
//           placeholder='Email'
//           // value={formValues.email}
//           // hookForm={{
//           //   register,
//           //   validations: {
//           //     pattern: {
//           //       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//           //       message: 'Debe ser un email valido'
//           //     },
//           //     required: { value: true, message: 'Este campo es requerido' }
//           //   }
//           // }}
//           // error={errors?.email?.message}
//         />

//         <div className='mt-6 text-center'>
//           <p>¿No tenés cuenta?</p>
//           <button className='mt-2 font-bold text-blue-500' onClick={() => (modalOpen ? close() : open())}>
//             Registrate
//           </button>
//         </div>

//         <div className='mb-6 mt-6 text-center'>
//           <p className='font-bold text-black'>Iniciar sesión con:</p>
//           {/* <div className='flex justify-center gap-14 py-4'>
//             <button className='flex h-14 w-14 items-center justify-center rounded-full bg-white drop-shadow-md'>
//               <GoogleIcon />
//             </button>
//             <button className='flex h-14 w-14 items-center justify-center rounded-full bg-[#1878F3] drop-shadow-md'>
//               <FacebookIcon />
//             </button>
//           </div> */}
//         </div>
//       </section>

//       {/* <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
//         {modalOpen && (
//           <Modal handleClose={close} className='flex w-[80%] max-w-xs flex-col gap-12 rounded-3xl bg-[#f3f3f3] p-8'>
//             <ModalContent />
//           </Modal>
//         )}
//       </AnimatePresence> */}
//     </main>
//   )
// }

import { LoginForm } from './components'

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
