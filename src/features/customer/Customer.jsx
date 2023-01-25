import React from 'react'
import useHandleInput from "../../custom-hooks/useHandleInput";

import './customer.css'

function Customer() {
  const [firstName, setFirstName] = useHandleInput('khaled')
  const [lastName, setLastName] = useHandleInput('hossain')

  return (
    <div>
    <h1>User Info:</h1>
    <div>
      <h2>First Name: {firstName}</h2>
      <label>
        Enter your firstname
        <input className='nameLabel' name="firstname" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <hr />
      <h2>Last Name: {lastName}</h2>
      <label>
        Enter your Lastname
        <input className='nameLabel' name="lastname" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
    </div>

    </div>
  )
}

export default Customer