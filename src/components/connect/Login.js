import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FirebaseContext } from '../firebase/'

const Login = (props) => {

  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    firebase.loginUser(email, password)
      .then(authUser => {
        setPassword('');
        setEmail('');
        props.history.push('/welcome')
      })
      .catch(error => {
        setError(error);
        setPassword('');
        setEmail('');
      }
      )
  }
  const btn = email === "" || password === "" ?
    <button disabled> connexion</button> : <button>connexion</button>

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin">
        </div>
        <div className="formBoxRight">
          <div className="formContent">
            <h2> connexion</h2>
            {error !== '' && <span> {error.message}</span>}
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off" required />
                <label htmlFor="email"> email</label>
              </div>
              <div className="inputBox">
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" autoComplete="off" required />
                <label htmlFor="password"> Mot de passe</label>
              </div>
              {btn}
              <div className="linkContainer">
                <Link className="simpleLink" to="/signup">Inscrivez-vouz maintence</Link>
                <Link className="simpleLink" to="/forget">  / Oublie passeword</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
