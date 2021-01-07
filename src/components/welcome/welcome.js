import React, { useState, Fragment, useEffect, useContext } from 'react'
import Logout from '../connect/Logout';
import { FirebaseContext } from '../firebase/'
import Quiz from '../Quiz/Quiz';



const Welcome = props => {


    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    useEffect(() => {

        // onAuthStateChanged =>  verifair user cnx
        let listener = firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setUserSession(authUser)
                : props.history.push('/');
        })
        return () => {
            listener()
        };

    }, [])

    return userSession === null ? (
        <Fragment>
            <div className="loader"></div>
            <p>loading....</p>

        </Fragment>
    ) : (
            <div className="quiz-bg">
                <div className="container">
                    <Logout />
                    <Quiz />
                </div>
            </div>
        )



}

export default Welcome
