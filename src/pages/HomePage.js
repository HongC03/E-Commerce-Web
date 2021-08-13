import React from 'react'
import { FeaturedProducts, Shoe, Services, Contact } from '../components'
const HomePage = () => {
  return (
    <main>
      <Shoe />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
