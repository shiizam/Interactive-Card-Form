import React from 'react'
import { useState } from 'react'
import { ThankYou } from '../ThanksCard/ThankYou'

import './form.css'
import front from '../../assets/bg-card-front.png'
import back from '../../assets/bg-card-back.png'



export const Form = ({ setFormData, formData }) => {

  const [submitted, setSubmitted] = useState(false)

  const handleInput = (e) => {
		const { name, value } = e.target;
		if (name === "number") e.target.value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
		if (name === "mm" || name === "yy") e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 2);
		if (name === "cvc") e.target.value = value.substring(0, 4);

		setFormData({ ...formData, [name]: e.target.value });
  }

  const handleError = (target, message = "Error", type = "add") => {
		
		document.querySelector(`.label${target}`).nextElementSibling.innerHTML = message;
		document.querySelector(`.label${target}`).nextElementSibling.classList[type === "add" ? "remove" : "add"]("info--hidden");
		document.querySelector(`[name="${target}"]`).classList[type](`input--error`);
	}

  const handleSubmit = (e) => {
    e.preventDefault()

    for (let i in formData) {
			if (!formData[i]) {
				handleError(i, "Can`t be blank");
			} else handleError(i, "", "remove");
		}

    if (formData.number) {
      if (formData.number.length < 19) {
        handleError("number", "Number is too short");
      } else if (formData.number.match(/[^0-9\s]/g)) {
        handleError("number", "Wrong format, numbers only");
      } else handleError("number", "", "remove");
    }

		if (formData.cvc) {
			if (formData.cvc.length < 3) {
				handleError("cvc", "CVC is too short");
			} else handleError("cvc", "", "remove");
		}

		if (!formData.mm) {
      handleError("mm", "Can`t be blank")
    } else if (formData.mm > 12) {
      handleError("mm", "Month format must be 01-12");
    } else if (formData.mm.length < 2) {
      handleError("mm", "Month format must be MM");
    } else handleError("mm", "", "remove");
    
    if (!formData.yy) {
      handleError("yy", "Can`t be blank");
    } else if (formData.yy.length < 2) {
      handleError("yy", "Year format must be YY")
    }


    if (document.querySelectorAll('.input--error').length === 0) setSubmitted(true);
  }

  return (
    <main>
        <div className="payment-form">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
          
              <div className="card-1-col">
                <div className="cardholder-name">
                  <label className='labelname'>
                    CARDHOLDER NAME
                    <input type="text" placeholder='e.g. Jane Appleseed' onChange={handleInput} name='name' />
                  </label>
                  <p className='info info--hidden' aria-live="polite"></p>
                </div>
                <label className='labelnumber'>
                  Card Number
                  <input type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={handleInput} name="number"   />
                </label>
                <p className='info info--hidden' aria-live="polite"></p>
              </div>
              
              <div className='wrapper-grid'>
                <div className="exp-date">
                  <label className='labelmm labelyy' id='exp-label'>
                    EXP. DATE (MM/YY)
                    <div id='expiration-grid'>
                      <input className='exp-month' type="number" placeholder='MM' onChange={handleInput} name='mm' />
                      <input className='exp-year' type="number" placeholder='YY' onChange={handleInput} name='yy'/>
                    </div>
                  </label>
                  <p className='info info--hidden' aria-live="polite"></p>
                </div>

                <div className="cvc">
                  <label className='labelcvc card-cvc'>CVC
                    <input className='cvc-input' type="number" name='cvc' placeholder='e.g. 123' onChange={handleInput}/>
                  </label>
                  <p className='info info--hidden' aria-live="polite"></p>
                </div>
              </div>
              <button className='submit-btn' type="submit" id='confirm-btn'>Confirm</button>

          </form>
          ) : (
            <ThankYou formData={formData} setFormData={setFormData} setSubmitted={setSubmitted}/>
          )}
          
        </div>
    </main>
  )
}
