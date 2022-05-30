import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../questions.json';


const Home = () => {
    const history = useHistory()
    const handlequiz = () => {
         const proceed = window.confirm('yes, I have seen the instruction')

        if (proceed) {
            history.push('/play/quiz')
        } else (
            history.push('/instructions')
        )
    }

    return (
        <Fragment>
            <Helmet><title>Multiple Choice Test</title></Helmet>
            <div id="home">
                <section>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>
                    <h1>Multiple Choice Test</h1>
                    <div className="play-button-container">
                        <ul >
                            <a onClick={()=>handlequiz()} className="play-button">
                                <li className=" text-white">
                                    <h4>Start Quiz</h4>
                                </li>
                            </a>

                        </ul>
                    </div>
                    {/* <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Sign up</Link>
                </div> */}


                </section>
            </div>
        </Fragment>
    );
};

export default Home;
