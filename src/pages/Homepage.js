import React from 'react'
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import Chicago from '../components/Chicago'

const Homepage = () => {
  return (
    <main>
      <Hero />
      <h2 style={{marginTop:40}}>This week's specials!</h2>
      <Specials />
      <Chicago />
    </main>
  )
}

export default Homepage
