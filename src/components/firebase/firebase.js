import app from 'firebase/app';
import 'firebase/auth';
import'firebase/firestore';


const config = {
    apiKey: "AIzaSyA3uejM7ULQPut1NGiKbRK0CYJWmQdnfYc",
    authDomain: "marvel-quiz-e2be9.firebaseapp.com",
    databaseURL: "https://marvel-quiz-e2be9.firebaseio.com",
    projectId: "marvel-quiz-e2be9",
    storageBucket: "marvel-quiz-e2be9.appspot.com",
    messagingSenderId: "674595247774",
    appId: "1:674595247774:web:08af653e08df0437f24d8f",
    measurementId: "G-ZWP97T2XPR"
};

// Initialize Firebase 
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db =app.firestore();
    }

    // inscription

    signupUser = ( email, password )  =>
        this.auth.createUserWithEmailAndPassword(email, password);


    // connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // DeconnexionÒ
    signoutUser = () => this.auth.signOut()

    //Récuprérer le mod de passe
    passwordReset = email =>this.auth.sendPasswordResetEmail(email);
     
    user = uid => this.db.doc(`users/${uid}`);



}

export default Firebase;