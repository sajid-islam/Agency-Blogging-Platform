import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signinPage = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <SignIn/>
    </div>
  )
}

export default signinPage