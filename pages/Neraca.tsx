
import React from 'react';
import { Download, Printer, FileText } from 'lucide-react';

export const Neraca: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Neraca (Balance Sheet)</h2>
          <p className="text-slate-500 mt-1">Laporan posisi keuangan PDAM pada periode tertentu.</p>
        </div>
        <div className="flex gap-3">
           <button className="h-11 px-6 bg-accent text-slate-900 rounded-xl text-sm font-bold shadow-lg shadow-accent/20 hover:brightness-110 flex items-center gap-2">
              <Printer size={18} /> Cetak
           </button>
           <button className="h-11 px-8 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 flex items-center gap-2">
              <Download size={18} /> Export PDF
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
         {/* Aktiva */}
         <div className="bg-white flex flex-col">
            <div className="bg-primary px-8 py-4 border-b border-primary">
               <h3 className="text-white font-black uppercase tracking-[0.2em] text-sm">Aset (Aktiva)</h3>
            </div>
            <div className="flex-1">
               <div className="px-8 py-3 bg-slate-50 border-b border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">I. Aset Lancar</span>
               </div>
               <div className="space-y-0 px-8 py-4">
                  {[
                    { label: 'Kas dan Setara Kas', value: '1,245,600,000' },
                    { label: 'Bank Mandiri (IDR)', value: '4,890,150,000' },
                    { label: 'Piutang Usaha', value: '854,200,000', sub: '(Setelah penyisihan piutang ragu-ragu)' },
                    { label: 'Persediaan Material', value: '321,450,000' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-slate-50 last:border-0">
                       <div className="flex flex-col">
                          <span className="text-sm font-medium text-slate-600">{row.label}</span>
                          {row.sub && <span className="text-[10px] text-slate-400 font-medium italic">{row.sub}</span>}
                       </div>
                       <span className="font-mono text-sm font-bold text-slate-900">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-4 mt-2 border-t-2 border-slate-100">
                     <span className="text-sm font-black text-slate-900">TOTAL ASET LANCAR</span>
                     <span className="font-mono font-black text-slate-900 underline decoration-double underline-offset-4">7,311,400,000</span>
                  </div>
               </div>

               <div className="px-8 py-3 bg-slate-50 border-y border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">II. Aset Tetap</span>
               </div>
               <div className="space-y-0 px-8 py-4">
                  {[
                    { label: 'Tanah', value: '12,000,000,000' },
                    { label: 'Bangunan dan IPA', value: '24,120,000,000' },
                    { label: 'Akumulasi Penyusutan', value: '(4,520,000,000)', color: 'text-rose-500' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-3">
                       <span className="text-sm font-medium text-slate-600">{row.label}</span>
                       <span className={clsx("font-mono text-sm font-bold", row.color || "text-slate-900")}>{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-4 mt-2 border-t-2 border-slate-100">
                     <span className="text-sm font-black text-slate-900">TOTAL ASET TETAP (NETTO)</span>
                     <span className="font-mono font-black text-slate-900 underline decoration-double underline-offset-4">31,600,000,000</span>
                  </div>
               </div>
            </div>
            <div className="bg-primary/5 p-8 border-t border-primary/20 flex justify-between items-center mt-auto">
               <span className="text-sm font-black text-primary uppercase tracking-[0.2em]">TOTAL AKTIVA</span>
               <span className="text-2xl font-mono font-black text-primary">38,911,400,000</span>
            </div>
         </div>

         {/* Pasiva */}
         <div className="bg-white flex flex-col">
            <div className="bg-[#0d141b] px-8 py-4 border-b border-slate-900">
               <h3 className="text-white font-black uppercase tracking-[0.2em] text-sm">Kewajiban & Ekuitas (Pasiva)</h3>
            </div>
            <div className="flex-1">
               <div className="px-8 py-3 bg-slate-50 border-b border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">III. Kewajiban</span>
               </div>
               <div className="space-y-0 px-8 py-4">
                  {[
                    { label: 'Hutang Usaha', value: '450,200,000' },
                    { label: 'Hutang Pajak', value: '82,400,000' },
                    { label: 'Hutang Bank Jangka Panjang', value: '6,433,750,000' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-slate-50 last:border-0">
                       <span className="text-sm font-medium text-slate-600">{row.label}</span>
                       <span className="font-mono text-sm font-bold text-slate-900">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-4 mt-2 border-t-2 border-slate-100">
                     <span className="text-sm font-black text-slate-900">TOTAL KEWAJIBAN</span>
                     <span className="font-mono font-black text-slate-900 underline decoration-double underline-offset-4">6,966,350,000</span>
                  </div>
               </div>

               <div className="px-8 py-3 bg-slate-50 border-y border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">IV. Ekuitas</span>
               </div>
               <div className="space-y-0 px-8 py-4">
                  {[
                    { label: 'Modal Disetor (Pemda)', value: '25,000,000,000' },
                    { label: 'Laba Ditahan', value: '4,520,000,000' },
                    { label: 'Laba Tahun Berjalan', value: '2,425,050,000', color: 'text-primary' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-3">
                       <span className="text-sm font-medium text-slate-600">{row.label}</span>
                       <span className={clsx("font-mono text-sm font-bold", row.color || "text-slate-900")}>{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-4 mt-2 border-t-2 border-slate-100">
                     <span className="text-sm font-black text-slate-900">TOTAL EKUITAS</span>
                     <span className="font-mono font-black text-slate-900 underline decoration-double underline-offset-4">31,945,050,000</span>
                  </div>
               </div>
            </div>
            <div className="bg-[#0d141b] p-8 border-t border-slate-900 flex justify-between items-center mt-auto">
               <span className="text-sm font-black text-white uppercase tracking-[0.2em]">TOTAL PASIVA</span>
               <span className="text-2xl font-mono font-black text-white">38,911,400,000</span>
            </div>
         </div>
      </div>
    </div>
  );
};

const clsx = (...classes: any[]) => classes.filter(Boolean).join(' ');
