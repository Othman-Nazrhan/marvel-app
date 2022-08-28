import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../firebase/'

const Logout = () => {

  const [checked, setChecked] = useState(false)
  const firebase = useContext(FirebaseContext);

  const handleChange = e => {
    setChecked(e.target.checked)
  }

  useEffect(() => {
    if (checked) {
      firebase.signoutUser();
    }
  }, [checked])

  return (
    <div className="logoutContainer" >
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Logout
