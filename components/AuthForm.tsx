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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }
  return (
    <section>
          <div>
              <h1>Hire Me</h1>
              //Icon will go here 
          </div>      
    </section>
  )
}

export default AuthForm
