
import React from 'react';
import { Download, Printer, TrendingUp, TrendingDown } from 'lucide-react';

export const LabaRugi: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Laporan Laba Rugi</h2>
          <p className="text-slate-500 mt-1">Ringkasan pendapatan dan beban operasional perusahaan.</p>
        </div>
        <div className="flex gap-3">
           <button className="h-11 px-8 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 flex items-center gap-2">
              <Download size={18} /> Export PDF
           </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border-t-8 border-accent overflow-hidden border border-slate-200 max-w-5xl mx-auto">
        <div className="p-12 text-center border-b border-slate-100">
          <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-slate-800">Perusahaan Daerah Air Minum</h3>
          <h4 className="text-2xl font-black text-primary mt-1 tracking-tight">LAPORAN LABA RUGI</h4>
          <p className="text-slate-500 mt-2 font-medium">Periode: 1 Januari 2024 - 31 Januari 2024</p>
          <div className="mt-4 flex justify-center gap-1">
            <div className="h-1 w-16 bg-primary rounded-full" />
            <div className="h-1 w-4 bg-accent rounded-full" />
          </div>
        </div>

        <div className="px-12 py-10 space-y-12">
           <section>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl mb-6">
                 <TrendingUp className="text-primary" size={18} />
                 <h4 className="font-black text-[10px] text-slate-500 uppercase tracking-widest">I. Pendapatan Operasional</h4>
              </div>
              <div className="space-y-4 px-4">
                 <div className="flex justify-between items-center group">
                    <span className="text-sm font-medium text-slate-600">Penjualan Air (Rekening Air)</span>
                    <span className="font-mono text-sm font-bold text-slate-900">Rp 1.245.850.000</span>
                 </div>
                 <div className="flex justify-between items-center group">
                    <span className="text-sm font-medium text-slate-600">Biaya Administrasi & Beban Tetap</span>
                    <span className="font-mono text-sm font-bold text-slate-900">Rp 152.400.000</span>
                 </div>
                 <div className="flex justify-between items-center group">
                    <span className="text-sm font-medium text-slate-600">Sambungan Baru</span>
                    <span className="font-mono text-sm font-bold text-slate-900">Rp 45.200.000</span>
                 </div>
                 <div className="pt-4 border-t-2 border-slate-50 flex justify-between items-center">
                    <span className="text-sm font-black text-slate-800">TOTAL PENDAPATAN OPERASIONAL</span>
                    <span className="font-mono font-black text-primary text-lg underline decoration-double underline-offset-4">Rp 1.443.450.000</span>
                 </div>
              </div>
           </section>

           <section>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl mb-6">
                 <TrendingDown className="text-rose-500" size={18} />
                 <h4 className="font-black text-[10px] text-slate-500 uppercase tracking-widest">II. Beban Operasional</h4>
              </div>
              <div className="space-y-4 px-4">
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Beban Pegawai (Gaji & Tunjangan)</span>
                    <span className="font-mono text-sm font-bold text-rose-500">(Rp 450.200.000)</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Beban Pengolahan Air (Bahan Kimia)</span>
                    <span className="font-mono text-sm font-bold text-rose-500">(Rp 112.500.000)</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Beban Listrik & Pompa</span>
                    <span className="font-mono text-sm font-bold text-rose-500">(Rp 215.300.000)</span>
                 </div>
                 <div className="pt-4 border-t-2 border-slate-50 flex justify-between items-center">
                    <span className="text-sm font-black text-slate-800">TOTAL BEBAN OPERASIONAL</span>
                    <span className="font-mono font-black text-rose-500 text-lg underline decoration-double underline-offset-4">(Rp 778.000.000)</span>
                 </div>
              </div>
           </section>

           <div className="bg-primary p-10 rounded-3xl text-white shadow-2xl shadow-primary/30 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                 <h3 className="text-lg font-black uppercase tracking-[0.2em] opacity-80">Laba Bersih Tahun Berjalan</h3>
                 <p className="text-sm opacity-60 mt-1">Setelah dikurangi seluruh beban operasional & pajak</p>
              </div>
              <div className="text-5xl font-black tabular-nums tracking-tighter">
                 Rp 412.700.000
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
