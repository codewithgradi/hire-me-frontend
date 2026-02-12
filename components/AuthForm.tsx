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
  return (
    <div>
      
    </div>
  )
}

export default AuthForm
