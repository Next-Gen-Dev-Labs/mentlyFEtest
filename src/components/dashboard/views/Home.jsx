import Welcome from '@/components/welcome/Welcome'
import Widget from '@/components/widget/Widget'
import React from 'react'
import Dashboard from '../Dashboard'

const Home = () => {
  return (
    <div className='bg-blue-801 ' >
      <Widget />
      <Welcome />
      <Dashboard />
    </div>
  )
}

export default Home