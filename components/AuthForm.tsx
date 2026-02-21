"use client"
import React, { useState } from 'react'
import { Mail, Lock, ArrowRight, UserCircle } from 'lucide-react'

const AuthForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [isLoginAction, setIsLoginAction] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    }

    const navyColor = "bg-[#0a2540]";
    const textNavy = "text-[#0a2540]";

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6 font-sans">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100">
                
                <div className={`${navyColor} p-10 text-center text-white`}>
                    <div className="border-2 border-white/30 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <span className="text-[8px] tracking-widest uppercase">Logo</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-[0.2em] uppercase">Hire Me</h1>
                    <p className="text-[10px] tracking-widest opacity-70 uppercase mt-2">
                        {isLoginAction ? "Welcome Back" : "Create Account"}
                    </p>
                </div>

                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-4">
                        
                        <div className="space-y-2">
                            <label className={`text-[10px] font-bold uppercase tracking-wider ${textNavy}`}>
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="name@company.com"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#0a2540] outline-none transition-all text-sm"
                                    required
                                />
                            </div>
                        </div>

                       
                        <div className="space-y-2">
                            <label className={`text-[10px] font-bold uppercase tracking-wider ${textNavy}`}>
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input 
                                    type="password" 
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#0a2540] outline-none transition-all text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className={`${navyColor} w-full text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                    >
                        {isLoginAction ? "Sign In" : "Register"}
                        <ArrowRight size={14} />
                    </button>

                    
                    <p className="text-center text-[11px] text-gray-500">
                        {isLoginAction ? "Don't have an account?" : "Already have an account?"}
                        <button 
                            type="button"
                            onClick={() => setIsLoginAction(!isLoginAction)}
                            className={`ml-2 font-bold underline decoration-1 underline-offset-4 ${textNavy}`}
                        >
                            {isLoginAction ? "Create One" : "Login"}
                        </button>
                    </p>
                </form>

                
                <div className="h-1 w-full bg-[#0a2540]/10"></div>
            </div>
        </section>
    )
}

export default AuthForm