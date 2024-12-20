import React from 'react'

const PortfolioLayout = ({children}) => {
  return (
    <main className='mt-10'>
        <h1 className='text-6xl font-bold text-gray-text'>Our Works</h1>
        {children}
    </main>
  )
}

export default PortfolioLayout