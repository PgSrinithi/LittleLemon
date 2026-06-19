import React from 'react'
import restarantfood from '../assets/restauranfood.jpg'


const Chicago = () => (
  <section style={{paddingTop: 24, paddingBottom: 24, maxWidth:1100,margin:'0 auto',display:'flex',gap:20,alignItems:'center'}}>
    <div style={{flex:1}}>
      <h2>Little Lemon</h2>
      <h4>Chicago</h4>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    </div>
    <div style={{width:260}}>
      <img src={restarantfood} alt="restaurant" style={{width:'100%',borderRadius:10, height: 200}}/>
    </div>
  </section>
)

export default Chicago
