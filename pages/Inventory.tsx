
import React from 'react';
import { Package, Plus, Filter, Download, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

export const Inventory: React.FC = () => {
  const items = [
    { code: 'P-PVC-001', name: 'Pipa PVC AW 2" Rucika', cat: 'Pipa & Fitting', unit: 'Batang', stock: 150, min: 50, status: 'Aman' },
    { code: 'M-AIR-024', name: 'Water Meter 1/2" Digital', cat: 'Meteran Air', unit: 'Pcs', stock: 42, min: 40, status: 'Stok Rendah' },
    { code: 'K-CHM-005', name: 'Kaporit Bubuk 60%', cat: 'Chemical', unit: 'Kg', stock: 2500, min: 500, status: 'Aman' },
    { code: 'P-HDPE-012', name: 'Pipa HDPE SDR-17 90mm', cat: 'Pipa & Fitting', unit: 'Roll', stock: 0, min: 5, status: 'Kosong' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Manajemen Persediaan</h2>
          <p className="text-slate-500 mt-1">Pengelolaan stok alat teknik dan bahan kimia operasional.</p>
        </div>
        <button className="h-11 px-6 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-2">
           <Plus size={20} /> Tambah Barang
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Total Nilai Stok', value: 'Rp 1.250M', icon: Package, color: 'text-primary' },
           { label: 'Total Item Teknik', value: '425 Item', icon: Package, color: 'text-slate-500' },
           { label: 'Stok Rendah', value: '12 Item', icon: Package, color: 'text-amber-500' },
           { label: 'Stok Kosong', value: '3 Item', icon: Package, color: 'text-rose-500' },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <stat.icon className={stat.color} />
              </div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black mt-1">{stat.value}</p>
           </div>
         ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
         <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
            <h4 className="font-bold text-slate-800">Daftar Inventaris Teknik</h4>
            <div className="flex gap-2">
               <button className="p-2.5 text-slate-500 hover:bg-white rounded-xl border border-slate-200 transition-all"><Filter size={18} /></button>
               <button className="p-2.5 text-slate-500 hover:bg-white rounded-xl border border-slate-200 transition-all"><Download size={18} /></button>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-slate-50/50">
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Kode</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Nama Barang</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Kategori</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Stok</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
                     <th className="px-6 py-4 text-center border-b border-slate-100">Aksi</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {items.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                       <td className="px-6 py-4 text-sm font-bold text-primary">{item.code}</td>
                       <td className="px-6 py-4">
                          <p className="text-sm font-bold text-slate-800">{item.name}</p>
                          <p className="text-[10px] text-slate-400 font-medium">Satuan: {item.unit}</p>
                       </td>
                       <td className="px-6 py-4 text-sm text-slate-500 font-medium">{item.cat}</td>
                       <td className="px-6 py-4 text-right tabular-nums text-sm font-black">{item.stock.toLocaleString()}</td>
                       <td className="px-6 py-4">
                          <span className={clsx(
                             "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                             item.status === 'Aman' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                             item.status === 'Stok Rendah' ? "bg-amber-50 text-amber-600 border-amber-100" :
                             "bg-rose-50 text-rose-600 border-rose-100"
                          )}>
                             {item.status}
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
      </div>
    </div>
  );
};

const clsx = (...classes: any[]) => classes.filter(Boolean).join(' ');
