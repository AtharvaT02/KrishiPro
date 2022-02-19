import React,{useState, useRef} from 'react'
import './signupin.css';
import axios from "axios";  
import Background from './Background';
import {NavLink} from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaTransgenderAlt } from 'react-icons/fa';
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';


const Signup = () => {
    const form = useRef();
    const [email,setEmail] = useState('')
    const [gender,setGender] = useState('')
    const [password,setPassword] = useState('')
    const [cpassword,setCPassword] = useState('')
    const [successful, setSuccessful] = useState(false);

   

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    async function handleRegister(event) {
      event.preventDefault()
        const response = await fetch('http://localhost:8081/api/register', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            gender,
            password,
          }),
        })
        const data = await response.json()
        alert('Signup Succesfull Feel free to login!!')
        console.log(data)
      };
    
  return (
    <>  
    <Background/>
        <div className='containercard'>
            <div className='head'>
                <h2>Sign UP</h2>
            </div>
            <form onSubmit={handleRegister} ref={form}>
            {!successful && (
            <div class="page">    
                <label class="field field_v3">
                    <input type="email" name='email' class="field__input" value={email} 
                    onChange={onChangeEmail}  placeholder="e.g. example@gmail.com"/>
                    <span class="field__label-wrap">
                    <span class="field__label"><MdEmail/>  E-mail</span>
                    </span>
                </label>
                <label class="field field_v3">
                    <input class="field__input" name='gender' value={gender}
                    onChange={(e)=>setGender(e.target.value)} placeholder="e.g. Male Female Other"/>
                    <span class="field__label-wrap">
                    <span class="field__label"><FaTransgenderAlt/>  Gender</span>
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
                <label class="field field_v3">
                    <input type="password" class="field__input" name='cpassword' value={cpassword}
                    onChange={(e)=>setCPassword(e.target.value)} placeholder="e.g. Strongpass@1234"/>
                    <span class="field__label-wrap">
                    <span class="field__label"><RiLockPasswordFill/>  Confirm Password</span>
                    </span>
                </label>

                <div class="wrap">
                    <button  type="submit" className="button" value="Login">Sign Up</button>
                </div>
            </div>
            )}

            
            </form>
            <div className='foot'>
                <h3>Already a member? <span className='logbt'>
                    <NavLink to="/login">Login</NavLink>
                    </span></h3>
            </div>
        </div>
        
    </>
  )
}

export default Signup