
import React from 'react';
import { Droplets, LogIn, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoutProps {
  onLogin: () => void;
}

export const Logout: React.FC<LogoutProps> = ({ onLogin }) => {
  return (
    <div className="fixed inset-0 bg-[#f6f7f8] flex items-center justify-center p-6 z-[1000]">
       <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-12 text-center border border-slate-100"
       >
          <div className="flex justify-center mb-10">
             <div className="size-24 bg-primary rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-primary/40 relative">
                <Droplets size={48} fill="currentColor" />
                <motion.div 
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.5 }}
                   className="absolute -top-2 -right-2 size-10 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center text-white"
                >
                   <CheckCircle2 size={24} />
                </motion.div>
             </div>
          </div>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">Anda Telah Berhasil Keluar</h2>
          <p className="text-slate-500 mt-4 leading-relaxed font-medium">
             Terima kasih telah menggunakan Sistem Informasi Akuntansi PDAM Enterprise. Sesi Anda telah diakhiri dengan aman.
          </p>

          <div className="mt-12">
             <button 
               onClick={onLogin}
               className="w-full py-4 bg-primary text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-primary/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3"
             >
                <LogIn size={20} className="stroke-[3px]" />
                Masuk Kembali
             </button>
          </div>

          <p className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
             PDAM DIGITAL ECOSYSTEM © 2024
          </p>
       </motion.div>
    </div>
  );
};
