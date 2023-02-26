import React from 'react';
import { useDispatch } from 'react-redux';
import { login,logout } from '../features/user';

const Login = () => {

    const dispatch = useDispatch();

  return (
    <>
        <h1>Login Page : </h1>

        {/* What we pass inside the login() action can be retrived using action.payload inside the login action logic written in it's slice */}
        <button onClick={()=>dispatch(login({name : "Shivangi",age : 23, email : "shiv.bind@gmail.com"}))}>Login</button>
        
        <button onClick={()=>dispatch(logout())}>Logout</button>

    </>
  )
}

export default Login