import React from 'react'

export default function Login() {
  return (
    <div className='border w-full flex flex-col items-center justify-center h-screen'>
       <div className='border pb-16 bg-slate-50 rounded-xl flex flex-col items-center justify-center w-2/4'>
       <div className=' w-fit p-10'>
            <h1 className='text-3xl'>Admin Login Form</h1>
        </div>
      <form className='w-3/4  gap-10  flex  flex-col p-10'>
        <input className='px-5 py-3 w-full outline-none rounded-md border-2' type="email" placeholder='Email *' />
        <input className='px-5 py-3 w-full outline-none rounded-md border-2' type="password" placeholder='Password *' />
        <button className='border rounded w-2/6 p-2 text-xl bg-black text-white'>Login </button>
      </form>
       </div>
    </div>
  )
}
