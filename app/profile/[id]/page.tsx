"use client"
import React, { useState } from 'react'
import { Home, User, CreditCard, LogOut, Menu, X } from 'lucide-react'
import Card from '@/components/Card';
import CreateCardForm from '@/components/CreateCardForm';
import AnimatedGradCap from '@/components/AnimatedGradCap';

const HomeView = () => (
  <div className="flex justify-center items-center">
    <div className='flex h-screen justify-center items-center'>
      <AnimatedGradCap />
    </div>
  </div>
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'card', label: 'Card View', icon: <CreditCard size={20} /> },
  ];

  const navyBg = "bg-[#0a2540]";

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <aside className={`${navyBg} text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-6 flex items-center gap-4 border-b border-white/10">
          <div className="border border-white/40 p-1 min-w-[32px] h-8 flex items-center justify-center">
            <span className="text-[8px] font-bold tracking-tighter">HM</span>
          </div>
          {isSidebarOpen && <h1 className="font-bold tracking-[0.2em] uppercase text-sm">Hire Me</h1>}
        </div>

        <nav className="flex-1 mt-6 px-3 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-sm transition-all ${
                activeTab === item.id 
                ? 'bg-white text-[#0a2540] shadow-lg' 
                : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              {isSidebarOpen && <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-4 p-3 text-white/50 hover:text-red-400 transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-xs font-bold uppercase tracking-widest">Logout</span>}
          </button>
        </div>
      </aside>

      
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-[#0a2540]">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-3">
             <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-[#0a2540] uppercase">Gradi Puata</p>
                <p className="text-[8px] text-gray-400 uppercase">Pro Member</p>
             </div>
             <div className="w-8 h-8 rounded-full bg-gray-200 border border-[#0a2540]/20"></div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'home' && <HomeView />}
          {activeTab === 'profile' && (
             <div className="animate-in fade-in duration-500">
               <CreateCardForm/>
             </div>
          )}
          {activeTab === 'card' && (
            <div className="flex flex-col items-center justify-center min-h-[80vh] animate-in zoom-in-95 duration-300">
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">Card Preview</p>
               <Card/>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}