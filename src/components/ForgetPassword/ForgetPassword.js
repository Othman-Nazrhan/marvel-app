import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../firebase/'



const ForgetPassword = props => {

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const firebase = useContext(FirebaseContext)



    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
            .then(() => {
                setError(null);
                setSuccess(`consulter votre email ${email}`)
                setEmail(""); 
                setTimeout(() => {
                    props.history.push("/login")

                }, 5000)
            })
           
            .catch(error => {
                setError(error);
                setEmail("");

             })   

    }

    const btn = email === "" ? <button disabled> Envoyer</button> : <button>Envoyer</button>


    return (
        <div>
            <div className="signUpLoginBox">
                <div className="slContainer">
                    <div className="formBoxLeftForget">

                    </div>
                    <div className="formBoxRight">

                        <div className="formContent">

                            {success && <span>{success}</span>}
                            {error && <span>{error.message}</span>}
                           
                            <h2> Mot de passe oublié </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="inputBox">
                                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off" required />
                                    <label htmlFor="email"> email</label>

                                </div>
                                {btn}
                                <div className="linkContainer">
                                    <Link className="simpleLink" to="/login" >Connecte-vous</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForgetPassword
