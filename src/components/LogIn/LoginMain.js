import React, { useContext } from 'react';
// import { Button } from 'react-bootstrap';
import './LoginMain.css'

import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from 'react';
// import logo from '../../images/logos/logo.png';

// firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const LoginMain= () => {

   
    const [loggedInuser,setLoggedInUser] = useContext(UserContext);
     
    const history=useHistory();
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     newUser: false,
    //     name: '',
    //     email: '',
    //     password: '',
    //     photo: '',

    // })

    const googleSignIn=()=>{

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName,email} = result.user;
           const signInUser={name: displayName, email: email}
             setLoggedInUser(signInUser)
             history.replace(from)
             console.log(signInUser)
             
                 


            })
            .catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;
            });
    }
    return (

        <div className="loginbanner">
        <div className="login d-flex justify-content-center">
            <div className="row">
                <div className="my-4">
                    <Link to="/"><img src="{logo}" height="70" alt="" /></Link>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center my-5" style={{height:'300px'}}>
            <div className="card mt-5 p-5 d-flex justify-content-center align-items-center" >
                <div className="card-body ">
                    <h3>Login With</h3>
                </div>
                <div className="buttonForm px-3 py-2 ">
                    <button className="button " onClick={googleSignIn}>
                    <img
                    className="loginIMG"
                    src="https://i.ibb.co/Wv3mmHY/google.png"
                    alt=""
                />
                            Google
                        </button>
                </div>
                {/* <br/>
                <p className="text-center">Don't have an account? <br/> <Link onClick={googleSignIn} to="#">Create an account</Link> </p> */}
            </div>

        </div>
    </div>
    );
};

export default LoginMain;