import React,{useState, useRef} from 'react'
import './signupin.css';
import axios from "axios";
import Background from './Background';
import {NavLink} from 'react-router-dom';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine,} from 'react-icons/ri';



const Login = () => {

    const form = useRef();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [successful, setSuccessful] = useState(false);


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    async function handleLogin(event) {
        event.preventDefault()
          const response = await fetch('http://localhost:8081/api/login', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          })
          const data = await response.json()
          
          if(data.user){
              window.location.href = '/fetch_with_auth'
          }else{
              alert('Check email and password')
          }

          console.log(data)

    }
  return (
    <>
    <Background/>
        <div className='containercard'>
            <div className='head'>
                <h2>Login</h2>
            </div>
            <form onSubmit={handleLogin} ref={form}>
            <div class="page">    
            <label class="field field_v3">
                    <input type="text" name='email' class="field__input" value={email} 
                    onChange={onChangeEmail}  placeholder="e.g. example@gmail.com"/>
                    <span class="field__label-wrap">
                    <span class="field__label"><MdEmail/>  E-mail</span>
                    </span>
                </label>
                
                <label class="field field_v3">
                    <input type="password" class="field__input" name='password' value={password}
                    onChange={onChangePassword}
                     placeholder="e.g. Strongpass@1234"/>
                    <span class="field__label-wrap">
                    <span class="field__label"><RiLockPasswordLine/>  Password</span>
                    </span>
                </label>
                
                <div class="wrap">
                    <button type='submit'  className="button">  _Login_  </button>
                </div>
            </div>
            </form>
            <div className='foot'>
                <h3>New Member? <span className='logbt'>
                <NavLink to="/">Signup</NavLink>
                </span></h3>
            </div>
        </div>
    </>
  )
}

export default Login