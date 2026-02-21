"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const AnimatedGradCap = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ 
            rotate: [0, -10, 10, 0],
            scale: 1.1 
        }}
        className="relative cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#0a2540] blur-2xl opacity-10 rounded-full" />
        
        <div className="relative bg-white p-6 rounded-full shadow-xl border border-gray-100 flex items-center justify-center">
          <GraduationCap 
            size={64} 
            className="text-[#0a2540]" 
            strokeWidth={1.5} 
          />
        </div>

        <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-2 -right-2 w-2 h-2 bg-[#0a2540] rounded-full" 
        />
        <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gray-400 rounded-full" 
        />
      </motion.div>
    </div>
  );
};

export default AnimatedGradCap;