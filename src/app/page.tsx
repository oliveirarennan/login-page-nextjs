'use client'
import { useState } from 'react'
import { User, Lock } from 'react-feather'

export default function Home() {
  const [grayScale, setGrayScale] = useState('grayscale')

  function handleActiveInput(){
    setGrayScale('grayscale-0')
  }


  return (
    <main className='h-screen w-screen'>
      <div className={`h-screen w-screen flex items-center justify-center bg-lines ${grayScale}`} >
        <form className='flex flex-col gap-4 p-24 rounded-2xl bg-zinc-700 opacity-90'>
          <div className='flex p-2 gap-2 bg-white rounded border-2 border-transparent focus-within:border-2 focus-within:border-orange-400'>
            <input type="text" name="login" className='order-2 peer rounded outline-0 ' placeholder='Email' onFocus={handleActiveInput} />
            <User className='order-1 text-zinc-400 peer-focus:text-orange-400 ' />
          </div>
          <div>

            <div className='flex p-2 gap-2 bg-white rounded border-2 border-transparent focus-within:border-2 focus-within:border-orange-400'>
              <input type="password" name="password" className='order-2 rounded outline-0 peer' placeholder='senha' />
              <Lock className='order-1 text-zinc-400 peer-focus:text-orange-400' />
            </div>
          </div>
          <button className='border-2 border-orange-400 p-2 rounded text-white font-semibold focus:outline-none focus:ring'>Entrar</button>
        </form>
      </div>
    </main>
  )
}
