import React from 'react';
import Card1 from '../assets/cards/card1.png'
import Card3 from '../assets/cards/card3.png'
import Card4 from '../assets/cards/card4.png'
import Card5 from '../assets/cards/card5.png'
import Card7 from '../assets/cards/card7.png'
import Card8 from '../assets/cards/card8.png'
import './Cards.css'

function Cards() {
  return(
    <div className='image-div'>
      <img className='card-images' src={Card1} alt="card1" />
      <img className='card-images' src={Card3} alt="card1" />
      <img className='card-images' src={Card4} alt="card1" />
      <img className='card-images' src={Card5} alt="card1" />
      <img className='card-images' src={Card7} alt="card1" />
      <img className='card-images' src={Card8} alt="card1" />
    </div>
  )
}

export default Cards;