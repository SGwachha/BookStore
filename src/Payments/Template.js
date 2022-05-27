import React from 'react'
import './Payments.css'

const Khalti = () => {
  return (
    <div className='template'>
      <div className='form'>
        <h3>Please Request Your Payments</h3>
        <form className='khalti-payment'>
          <div className="template-design">
            <label className='Amount'>Amount:</label><br />
            <input className='width' type='0-number' id='Amount' name='Amount' /><br />
          </div>
          <div className="template-design">
            <label className='Account'>To Account / Mobile Number:</label><br />
            <input className='width' type='0-number' id='Account' name='Account' /><br />
          </div>
          <div className="template-design">
            <label className='FName'>To owner Name:</label><br />
            <input className='width' type='text' id='FName' name='FName' /><br />
          </div>
          <div className="template-design">
            <label className='From'>From Account:</label><br />
            <input className='width' type='0-number' id='From' name='From' /><br />
          </div>
          <div className="template-design">
            <label className='BName'>Bank Name:</label><br />
            <select name="BankName" id="BankName" className='BankName'>
              <option value='Kumari Bank Ltd.'>Kumari Bank Ltd.</option>
              <option value='Central Finance Ltd.'>Central Finance Ltd.</option>
              <option value='Civil Bank Ltd.'>Civil Bank Ltd.</option>
              <option value='Everest Bank Ltd.'>Everest Bank Ltd.</option>
              <option value='Laxmi Bank Ltd.'>Laxmi Bank Ltd.</option>
            </select><br />
          </div>
          <div className="template-design">
            <label className='Remarks'>Remarks:</label><br />
            <input className='width' type='text' id='Remarks' name='Remarks' drop /><br />
          </div>
          <div className="button">
            <button className='Pay Now' onClick='/authenticationPage'>Pay Now</button>
          </div>
          <div className="button">
            <button className='Back'>Back</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Khalti