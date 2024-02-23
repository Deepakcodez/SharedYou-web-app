import React from 'react'
import { Sidebar } from './_components/Sidebar';

const layout = ({children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
    <div className=' flex w-full'>

    <div>
      <Sidebar/>
    </div>
    {children}
    </div>
    </>
  )
}

export default layout