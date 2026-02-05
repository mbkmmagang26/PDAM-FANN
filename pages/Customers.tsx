
import React from 'react';
import { Users, UserPlus, Filter, Download, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

export const Customers: React.FC = () => {
  const customers = [
    { id: 'P-100234', name: 'Ahmad Subardjo', type: 'Rumah Tangga A1', status: 'Aktif', address: 'Jl. Merdeka No. 12', initials: 'AS' },
    { id: 'P-100235', name: 'Budi Tabuti', type: 'Rumah Tangga A1', status: 'Belum Bayar', address: 'Jl. Sentosa No. 5', initials: 'BT' },
    { id: 'P-100238', name: 'CV. Lancar Jaya', type: 'Industri', status: 'Aktif', address: 'Kawasan Industri Candi', initials: 'CL' },
    { id: 'P-100240', name: 'Dewi Nurhaliza', type: 'Rumah Tangga A2', status: 'Belum Bayar', address: 'Jl. Melati No. 8', initials: 'DN' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Daftar Pelanggan</h2>
          <p className="text-slate-500 mt-1">Database sambungan pelanggan PDAM aktif.</p>
        </div>
        <button className="h-11 px-6 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-2">
           <UserPlus size={20} /> Tambah Pelanggan
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
         <div className="p-4 border-b border-slate-100 flex flex-wrap justify-between items-center gap-4 bg-slate-50/30">
            <div className="flex gap-4 flex-1 max-w-2xl">
               <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="Cari ID atau Nama..." 
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                     <Users size={18} />
                  </div>
               </div>
               <select className="bg-white border border-slate-200 rounded-xl text-sm px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Semua Golongan</option>
                  <option>Rumah Tangga A1</option>
                  <option>Industri</option>
               </select>
            </div>
            <div className="flex gap-2">
               <button className="p-2.5 text-slate-500 hover:bg-white rounded-xl border border-slate-200 transition-all"><Filter size={18} /></button>
               <button className="p-2.5 text-slate-500 hover:bg-white rounded-xl border border-slate-200 transition-all"><Download size={18} /></button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-slate-50/50">
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">ID Pelanggan</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Nama Pelanggan</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Golongan</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
                     <th className="px-6 py-4 text-center border-b border-slate-100 w-24">Aksi</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {customers.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                       <td className="px-6 py-4 text-sm font-bold text-primary">{c.id}</td>
                       <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                             <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center text-[10px] font-black text-primary">
                                {c.initials}
                             </div>
                             <div>
                                <p className="text-sm font-bold text-slate-800">{c.name}</p>
                                <p className="text-[10px] text-slate-400 font-medium">{c.address}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <span className="text-[10px] font-black px-2 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200 uppercase tracking-tighter">
                             {c.type}
                          </span>
                       </td>
                       <td className="px-6 py-4">
                          <span className={clsx(
                             "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border",
                             c.status === 'Aktif' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
                          )}>
                             <div className={clsx("size-1.5 rounded-full mr-1.5", c.status === 'Aktif' ? "bg-emerald-500" : "bg-amber-500")} />
                             {c.status}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-center">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                             <MoreVertical size={18} />
                          </button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center mt-auto">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Menampilkan 1-10 dari 4,203 data</p>
            <div className="flex gap-1">
               <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-50"><ChevronLeft size={16} /></button>
               <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-black">1</button>
               <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 text-xs font-black">2</button>
               <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-50"><ChevronRight size={16} /></button>
            </div>
         </div>
      </div>
    </div>
  );
};

const clsx = (...classes: any[]) => classes.filter(Boolean).join(' ');
