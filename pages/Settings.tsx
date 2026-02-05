
import React, { useState } from 'react';
import { User, Shield, Bell, Monitor, Save, ChevronRight, Key, Globe, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'system' | 'security'>('profile');

  const tabs = [
    { id: 'profile', label: 'Profil Saya', icon: User },
    { id: 'system', label: 'Pengaturan Sistem', icon: Monitor },
    { id: 'security', label: 'Keamanan & Akses', icon: Shield },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Pengaturan</h2>
        <p className="text-slate-500 mt-1">Kelola preferensi akun dan konfigurasi sistem aplikasi.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="bg-white rounded-3xl border border-slate-200 p-2 shadow-sm space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={clsx(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-bold text-sm",
                  activeTab === tab.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 rounded-3xl border border-amber-100 p-6">
             <h4 className="text-xs font-black text-amber-800 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Shield size={14} /> Status Keamanan
             </h4>
             <p className="text-xs text-amber-700/80 leading-relaxed font-medium">
                Akun Anda belum mengaktifkan Autentikasi 2-Faktor. Disarankan untuk meningkatkan keamanan.
             </p>
             <button className="mt-4 text-xs font-black text-amber-900 underline underline-offset-4 hover:text-amber-700 transition-colors">
                Aktifkan Sekarang
             </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {activeTab === 'profile' && (
              <div className="p-8 space-y-10">
                <div className="flex items-center gap-8 border-b border-slate-100 pb-10">
                   <div className="relative group">
                      <div 
                        className="size-24 rounded-3xl bg-cover bg-center ring-4 ring-primary/10 shadow-xl"
                        style={{ backgroundImage: `url(https://picsum.photos/seed/siti/200)` }}
                      />
                      <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg border border-slate-100 text-primary hover:scale-110 transition-transform">
                         <Monitor size={16} />
                      </button>
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-slate-900">Siti Rahmawati</h3>
                      <p className="text-sm text-slate-500 mt-1 font-medium">st.rahmawati@pdam-sia.co.id</p>
                      <div className="mt-3 flex gap-2">
                         <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-full">Admin Akuntansi</span>
                         <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase rounded-full">Aktif</span>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Nama Lengkap</label>
                      <input type="text" defaultValue="Siti Rahmawati" className="w-full rounded-2xl border-slate-200 bg-slate-50 focus:ring-primary h-12 px-4 font-bold text-sm" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">ID Pegawai</label>
                      <input type="text" readOnly defaultValue="PDAM-ACC-092" className="w-full rounded-2xl border-slate-200 bg-slate-100 h-12 px-4 font-mono font-bold text-sm text-slate-500" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Email Kantor</label>
                      <input type="email" defaultValue="st.rahmawati@pdam-sia.co.id" className="w-full rounded-2xl border-slate-200 bg-slate-50 focus:ring-primary h-12 px-4 font-bold text-sm" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Nomor WhatsApp</label>
                      <input type="text" defaultValue="+62 812 3456 7890" className="w-full rounded-2xl border-slate-200 bg-slate-50 focus:ring-primary h-12 px-4 font-bold text-sm" />
                   </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                   <button className="px-6 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-slate-50 transition-all">Batal</button>
                   <button className="px-8 py-3 rounded-2xl bg-primary text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                      <Save size={18} /> Simpan Perubahan
                   </button>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="p-8 space-y-10">
                 <h3 className="text-xl font-black text-slate-900">Preferensi Sistem</h3>
                 
                 <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                       <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                             <Monitor size={20} />
                          </div>
                          <div>
                             <p className="text-sm font-black text-slate-800 uppercase tracking-tight">Mode Gelap</p>
                             <p className="text-xs text-slate-500 mt-0.5">Aktifkan tema gelap untuk mengurangi kelelahan mata.</p>
                          </div>
                       </div>
                       <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 cursor-pointer">
                          <span className="translate-x-1 inline-block h-4 w-4 rounded-full bg-white transition" />
                       </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                       <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                             <Bell size={20} />
                          </div>
                          <div>
                             <p className="text-sm font-black text-slate-800 uppercase tracking-tight">Notifikasi Browser</p>
                             <p className="text-xs text-slate-500 mt-0.5">Dapatkan notifikasi real-time untuk penagihan jatuh tempo.</p>
                          </div>
                       </div>
                       <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary cursor-pointer">
                          <span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white transition" />
                       </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                       <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                             <Globe size={20} />
                          </div>
                          <div>
                             <p className="text-sm font-black text-slate-800 uppercase tracking-tight">Bahasa Aplikasi</p>
                             <p className="text-xs text-slate-500 mt-0.5">Pilih bahasa antarmuka sistem.</p>
                          </div>
                       </div>
                       <select className="bg-white border-slate-200 rounded-xl text-xs font-bold px-4 py-2">
                          <option>Bahasa Indonesia</option>
                          <option>English</option>
                       </select>
                    </div>
                 </div>

                 <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                    <button className="px-8 py-3 rounded-2xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                       Terapkan Pengaturan
                    </button>
                 </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="p-8 space-y-10">
                 <h3 className="text-xl font-black text-slate-900">Keamanan & Akses</h3>

                 <div className="space-y-8">
                    <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50">
                       <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Ubah Kata Sandi</h4>
                       <div className="grid grid-cols-1 gap-6 max-w-md">
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Kata Sandi Saat Ini</label>
                             <input type="password" placeholder="••••••••" className="w-full rounded-2xl border-slate-200 bg-white focus:ring-primary h-12 px-4" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Kata Sandi Baru</label>
                             <input type="password" placeholder="Min. 8 Karakter" className="w-full rounded-2xl border-slate-200 bg-white focus:ring-primary h-12 px-4" />
                          </div>
                          <button className="w-fit px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:brightness-110 transition-all mt-2">
                             Perbarui Kata Sandi
                          </button>
                       </div>
                    </div>

                    <div className="flex items-center justify-between p-6 border-l-4 border-primary bg-primary/5 rounded-2xl">
                       <div className="flex items-center gap-4">
                          <Key className="text-primary" />
                          <div>
                             <p className="text-sm font-bold text-slate-800">Sesi Terakhir Login</p>
                             <p className="text-xs text-slate-500">Jakarta, Indonesia • Chrome di Windows • Aktif sekarang</p>
                          </div>
                       </div>
                       <button className="text-xs font-bold text-rose-500 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors">
                          Putuskan Sesi Lain
                       </button>
                    </div>
                 </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
