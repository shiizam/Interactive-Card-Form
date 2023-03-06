import React from 'react'
import './ThankYou.css'


import checkmark from '../../assets/icon-complete.svg'


export const ThankYou = ( {setFormData, setSubmitted} ) => {

  const resetForm = () => {
		setFormData({ name: null, number: null, mm: null, yy: null, cvc: null });
		setSubmitted(false);
	}


  return (
    <div>
      <div className="card-thanks">
        <img src={checkmark} alt='checkmark'></img>
        <div className='thanks-body'>
          <h1 className='thanks'>thank you!</h1>
          <p>We've added your card details</p>      
        </div>
        <button className='submit-btn' id='thanks-btn' onClick={resetForm}>Continue</button>
      </div>
    </div>
  )
}