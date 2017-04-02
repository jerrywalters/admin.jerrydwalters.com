import React from 'react';
import { signIn } from '../../firebaseAuth';
import { browserHistory } from 'react-router'

import googleLogo from '../../images/google_logo.svg';

const FailedAuth = () => {
  function login(){
    signIn(function(data){
      browserHistory.push('/admin');
    });
  }
  return (
    <div className="failed-auth">
      <h1> Whoops, you're not Jerry! </h1>
      <p> Try messaging me on my <a href="http://www.jerrydwalters.com"> beautiful portfolio site </a> instead :^) </p>
      <h2> or if you're me (you're not) then go ahead and try again </h2>
      <div className="sign-in">
        <button className="sign-in__button" onClick={()=>login()}>
          <div className="google-logo__container">
            <img className="google-logo__img" src={googleLogo} />
          </div>
          <span className="sign-in__text">Sign in with Google</span>
        </button>
      </div>
    </div>
  )
}

export default FailedAuth;