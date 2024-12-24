import { SignUp } from '@clerk/nextjs'
import React from 'react'

const signupPage = () => {
  return (
    <div>
      <div className='flex justify-center items-center my-10'>
            <SignUp/>
          </div>
    </div>
  )
}

export default signupPage