import React from 'react'
import ironman from '../../images/ironman.png'

const signup = () => {
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                  
                    <div className="formContent"> 
                     <h2> Inscription</h2>
                        <form >

                            <div className="inputBox">
                                <input type="text" id="pseudo" autoComplete="off" required />
                                <label htmlFor="pseudo"> Pseudo</label>

                            </div>
                            <div className="inputBox">
                                <input type="email" id="email" autoComplete="off" required />
                                <label htmlFor="email"> email</label>

                            </div>
                            <div className="inputBox">
                                <input type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password"> Mot de passe</label>

                            </div>
                            <div className="inputBox">
                                <input type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword"> Confirmer  Mot de passe</label>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default signup;
