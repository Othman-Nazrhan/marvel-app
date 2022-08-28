import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../firebase'
import { Link } from 'react-router-dom';

const Signup = (props) => {

  const firebase = useContext(FirebaseContext);
  const data = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState('')

  const handlechange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password, name } = loginData;
    firebase.signupUser(email, password)
      .then(authUser => {
        return firebase.user(authUser.user.uid).set({
          name,
          email
        })
      })
      .then(() => {
        setLoginData({ ...data });
        props.history.push('/welcome')
      })
      .catch(error => {
        setError(error)
      })
  }

  const { name, email, password, confirmPassword } = loginData;
  const btn = name === "" || email === "" || password === "" || password !== confirmPassword ?
    <button disabled>Inscription</button> : <button >Inscription</button>

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup">

        </div>
        <div className="formBoxRight">

          <div className="formContent">
            <h2> Inscription</h2>
            {error !== '' && <span>{error.message}</span>}
            <form onSubmit={handleSubmit} >
              <div className="inputBox">
                <input onChange={handlechange} type="text" value={name} id="name" autoComplete="off" required />
                <label htmlFor="name"> name</label>
              </div>
              <div className="inputBox">
                <input onChange={handlechange} type="email" value={email} id="email" autoComplete="off" required />
                <label htmlFor="email"> email</label>
              </div>
              <div className="inputBox">
                <input onChange={handlechange} type="password" value={password} id="password" autoComplete="off" required />
                <label htmlFor="password"> Mot de passe</label>
              </div>
              <div className="inputBox">
                <input onChange={handlechange} type="password" value={confirmPassword} id="confirmPassword" autoComplete="off" required />
                <label htmlFor="confirmPassword"> Confirmer  Mot de passe</label>
              </div>
              {btn}
              <div className="linkContainer">
                <Link className="simpleLink" to="/login">Déja inscrit? connectez-vous</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
