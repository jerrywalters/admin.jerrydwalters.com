import React from 'react'
import { signIn } from '../../firebaseAuth'
import { browserHistory } from 'react-router'

import googleLogo from '../../images/google_logo.svg'

const SignIn = () => {

  // unnecessary -- put it all in onClick
  // function login() {
  //   signIn(data => browserHistory.push('/admin'))
  // }

  return (
    <div className="sign-in">
      <section className="sign-in__text-container">
        <h2 className="sign-in__heading--primary"> Portfolio Support </h2>
      </section>
      <button className="sign-in__button" onClick={() => signIn(data => browserHistory.push('/admin'))}>
        <div className="google-logo__container">
          <img className="google-logo__img" src={googleLogo} alt='Google' />
        </div>
        <span className="sign-in__button-text">Sign in with Google</span>
      </button>
    </div>
  )
}

export default SignIn
