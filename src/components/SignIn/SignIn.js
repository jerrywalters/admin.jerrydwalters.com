import React from 'react';
import { signIn } from '../../firebaseAuth';
import { browserHistory } from 'react-router'

const SignIn = () => {
  function login(){
    signIn(function(data){
      browserHistory.push('/admin');
    });
  }
  return (
    <div>
      <button onClick={()=>login()}>Sign In</button>
    </div>
  )
}

export default SignIn;
