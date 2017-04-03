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
      <div className="sign-in">
        <section className="sign-in__text-container">
          <h1 className="sign-in__heading--failed"> Whoops, you're not Jerry! </h1>
          <p className="sign-in__subtext"> 
            You probably got here from my <a className="sign-in__link" href="http://www.jerrydwalters.com"> beautiful portfolio site </a>
          </p>
          <p className="sign-in__subtext"> 
            Sorry for the false advertisement, but I can't have you logging in and seeing all of the conversations I had with myself trying to debug this thing -- there's far too much profanity :^)
          </p>
          <h2 className="sign-in__heading"> or if you are me (you're not) then go ahead and try that again </h2>
        </ section>
        <button className="sign-in__button" onClick={()=>login()}>
          <div className="google-logo__container">
            <img className="google-logo__img" src={googleLogo} />
          </div>
          <span className="sign-in__button-text">Sign in with Google</span>
        </button>
      </div>
    </div>
  )
}

export default FailedAuth;