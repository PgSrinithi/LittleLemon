import React from 'react';
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';

const mock = [
  {id:1,title:'Greek salad',price:'$12.99',img:greekSalad},
  {id:2,title:'Bruschetta',price:'$5.99',img:bruschetta},
  {id:3,title:'Lemon Dessert',price:'$5.00',img:lemonDessert}
]

const Specials = () => (
  <div style={{display:'flex',gap:20,justifyContent:'center'}}>
    {mock.map(item=> (
      <article key={item.id} style={{width:260,boxShadow:'0 1px 0 rgba(0,0,0,0.06)',borderRadius:6, background: "#edefee"}}>
        <img src={item.img} alt={item.title} style={{width:'100%',height:140,objectFit:'cover',borderTopLeftRadius:6,borderTopRightRadius:6}}/>
        <div style={{padding:12}}>
          <h4 style={{margin:0}}>{item.title} <span style={{float:'right',color:'#e5b800'}}>{item.price}</span></h4>
          <p style={{fontSize:13,color:'#666',marginTop:8}}>Short description for {item.title}.</p>
        </div>
      </article>
    ))}
  </div>
)

export default Specials
