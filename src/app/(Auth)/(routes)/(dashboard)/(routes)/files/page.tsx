import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Files = () => {
  return (
    <div className=" w-full  flex px-5 p-2 justify-between">
      <h1>Files</h1>
    <UserButton afterSignOutUrl='/' />
  </div>
  )
}

export default Files