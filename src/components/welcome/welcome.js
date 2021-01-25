import React, { useState, Fragment, useEffect, useContext } from 'react'
import Logout from '../connect/Logout';
import { FirebaseContext } from '../firebase/'
import Quiz from '../Quiz/Quiz';



const Welcome = props => {


    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {

        // onAuthStateChanged =>  verifair user cnx
        let listener = firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setUserSession(authUser)
                : props.history.push('/');
        })

        if (!!userSession) {
            firebase.user(userSession.uid)
                .get()
                .then( doc => {
                    if (doc && doc.exists) {
                        const myDate = doc.data();
                        setUserData(myDate)
                    }
                })
                .catch(error => {
                    console.log(error);
                })

        }
        return () => {
            listener()
        };

    }, [userSession])

    return userSession === null ? (
        <Fragment>
            <div className="loader"></div>
            <p>loading....</p>

        </Fragment>
    ) : (
            <div className="quiz-bg">
                <div className="container">
                    <Logout />
                    <Quiz userData={userData} />
                </div>
            </div>
        )



}

export default Welcome
