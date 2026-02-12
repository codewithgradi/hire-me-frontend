"use client"
import React, { useState } from 'react'


const AuthForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev=>({...prev,[name]:value}))
    }
    const [isLoginAction, setIsLoginAction] = useState(true);
  return (
      <div>
          <div>
              <label htmlFor="email">Email</label>
              <input type="text" id='email' name="email" onChange={handleChage} />
          </div>
          <div>
              <label htmlFor="password">Password</label>
              <input type="text" id='password' name="password" onChange={handleChage} />
          </div>
          <div>
            <button>{isLoginAction ? "Login" : "Create Account"}</button>
            <div>
            <button>Login with Google</button>
              </div> 
            <span>Not Registered? Create Profile Here.</span>
          </div>
      
    </div>
  )
}

export default AuthForm
