"use client"
import React, { useState } from 'react'
import { User, Mail, Phone, Globe, Linkedin, Github, GraduationCap, School, Save } from 'lucide-react'
import { QualificationTypes } from '@/ProgTypes';


export default function CreateCardForm() {
    const [form, setForm] = useState({
        FirstName: "",
        Surname: "",
        Email: "",
        PhoneNumber: "",
        Qualification: QualificationTypes.BachelorDegree,
        QualificationName: "",
        Institution: "",
        LinkedInUrl: "",
        GithubUrl: "",
        PersonalWebsite: ""
    });

    const navyColor = "bg-[#0a2540]";
    const textNavy = "text-[#0a2540]";
    const inputStyle = "w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#0a2540] focus:ring-1 focus:ring-[#0a2540] outline-none transition-all text-sm rounded-sm";
    const labelStyle = `text-[10px] font-bold uppercase tracking-wider ${textNavy} mb-1 block`;

    return (
        <section className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center">
            <div className="w-full max-w-3xl bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100">
                
                {/* Header Section */}
                <div className={`${navyColor} p-8 text-white flex justify-between items-center`}>
                    <div>
                        <h1 className="text-xl font-bold tracking-[0.2em] uppercase">Create Profile</h1>
                        <p className="text-[10px] tracking-widest opacity-70 uppercase mt-1">Digital Networking Identity</p>
                    </div>
                    <div className="border border-white/30 p-2 hidden sm:block">
                        <span className="text-[8px] tracking-widest uppercase">Hire Me</span>
                    </div>
                </div>

                <form className="p-8 space-y-8">
                    {/* Basic Information Group */}
                    <div className="space-y-4">
                        <h2 className={`text-xs font-black uppercase tracking-[0.2em] border-b pb-2 ${textNavy}`}>Personal Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelStyle}>First Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="Gradi" className={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label className={labelStyle}>Surname</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="Puata" className={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label className={labelStyle}>Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="email" placeholder="hello@domain.com" className={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label className={labelStyle}>Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="068 048 8872" className={inputStyle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Group */}
                    <div className="space-y-4">
                        <h2 className={`text-xs font-black uppercase tracking-[0.2em] border-b pb-2 ${textNavy}`}>Academic Background</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelStyle}>Qualification Type</label>
                                <div className="relative">
                                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <select className={`${inputStyle} appearance-none`}>
                                        {Object.values(QualificationTypes).map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className={labelStyle}>Field of Study</label>
                                <div className="relative">
                                    <School className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="Information Technology" className={inputStyle} />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label className={labelStyle}>Institution Name</label>
                                <div className="relative">
                                    <School className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="Richfield Institute of Technology" className={inputStyle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Group */}
                    <div className="space-y-4">
                        <h2 className={`text-xs font-black uppercase tracking-[0.2em] border-b pb-2 ${textNavy}`}>Professional Links</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className={labelStyle}>LinkedIn Username</label>
                                <div className="relative">
                                    <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="gradi-puata" className={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label className={labelStyle}>GitHub Username</label>
                                <div className="relative">
                                    <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="codewithgradi" className={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label className={labelStyle}>Personal Website</label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" placeholder="gradipuata.vercel.app" className={inputStyle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <button 
                            type="button"
                            className={`${navyColor} text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:opacity-90 transition-all shadow-lg active:scale-95`}
                        >
                            <Save size={16} />
                            Generate Card
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}