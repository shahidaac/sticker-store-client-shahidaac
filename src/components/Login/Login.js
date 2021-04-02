import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { paintContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(paintContext);

    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
    }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage)
    });     
    }
    return (
        <div>
            <div className="page-header">
                <h1>Login</h1>
            </div>
            <div className="login">
                <h5><strong>Create an account</strong></h5>
                <button className="login-btn" onClick={handleSignWithGoogle}><span> <FontAwesomeIcon icon={faGoogle} /> </span>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;