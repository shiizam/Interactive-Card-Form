import React from 'react'

import './card.css'
import front from '../../assets/bg-card-front.png'
import back from '../../assets/bg-card-back.png'

export const Card = ({ formData }) => {
  return (
    <aside className="banner">
      <div className="front-card">
        <div className="white-circle"></div>
        <div className="border-circle"></div>
        <img src={front} alt="front-card" />
        <div className="numbers">
          <span>{formData.number || "0000 0000 0000 0000"}</span>
        </div>
        <div className="front-name">
          <span>{formData.name || "Jane Appleseed"}</span>
        </div>
        <div className="front-expiration">
          <span>{formData.mm || "00"}/{formData.yy || "00"}</span>
        </div>
      </div>
      <div className="back-card">
        <img src={back} alt="back-card" />
        <div className='cvc'>
          <span>{formData.cvc || "000"}</span>
        </div>
      </div>
    </aside>
  )
}


