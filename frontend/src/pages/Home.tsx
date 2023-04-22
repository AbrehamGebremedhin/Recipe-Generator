import React from 'react'
import Search from './Search'

const Home = () => {
  return (
    <div className='ml-24 my-24'>
      <h1 className='font-mono text-5xl font-medium text-teal-800'>Recipe Database</h1>
      
      <Search/>
    </div>
  )
}

export default Home