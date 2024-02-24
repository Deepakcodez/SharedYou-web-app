import { UserButton } from '@clerk/nextjs'
import React from 'react'

export const TopHeader = () => {
  return (
    <>
    <div className=' flex w-full  py-5 px-5 items-center border-b  justify-between  bg-white '>
        <h1 className='text-black '>Logo</h1>
        <UserButton/>

    
    </div>
    </>
  )
}
