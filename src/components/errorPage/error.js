import React from 'react'
import batman from '../../images/batman.png'

const error = () => {




    return (
        <div className="quiz-bg">
            <div className="container">
        <h2 style={{textAlign:'center'}}> Oups, ce page n'existe pas</h2>
        <img  style={{display :"block", margin:"40px auto"}} src={ batman }/>
            </div>
            
        </div>
    )
}
export default error;