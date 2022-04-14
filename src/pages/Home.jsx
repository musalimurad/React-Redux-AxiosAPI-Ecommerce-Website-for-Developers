import React from 'react'
import Products from '../components/product/Products'

const Home = () => {
  return (
    <section id='home'>
      <div className="container">
        <Products/>
         {/* Products elements it comes from here ==> components/[product/Products.jsx */}
      </div>
    </section>
  )
}

export default Home