
import React from 'react';
import { Search, Printer, FileSpreadsheet, Download } from 'lucide-react';

export const BukuBesar: React.FC = () => {
  const mutations = [
    { date: '01/05/2024', ref: '-', desc: 'SALDO AWAL', debit: 0, credit: 0, balance: 85400000, type: 'init' },
    { date: '05/05/2024', ref: 'JU/2024/05/001', desc: 'Penerimaan Rekening Air Cabang Tengah', debit: 0, credit: 12500000, balance: 72900000 },
    { date: '12/05/2024', ref: 'JU/2024/05/042', desc: 'Piutang Rekening Air Periode Mei (Tagihan)', debit: 450200000, credit: 0, balance: 523100000 },
    { date: '15/05/2024', ref: 'JU/2024/05/088', desc: 'Penerimaan Loket Kantor Pusat', debit: 0, credit: 45300000, balance: 477800000 },
    { date: '20/05/2024', ref: 'JU/2024/05/112', desc: 'Koreksi Piutang Pelanggan 00129', debit: 0, credit: 150000, balance: 477650000 },
    { date: '22/05/2024', ref: 'JU/2024/05/145', desc: 'Penerimaan PPOB / Bank Transfer', debit: 0, credit: 212400000, balance: 265250000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Buku Besar</h2>
          <p className="text-slate-500 mt-1">Daftar mutasi transaksi per akun perkiraan.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
           <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Pilih Akun</label>
              <select className="bg-white border-slate-200 rounded-xl text-sm px-4 py-2 focus:ring-primary h-11 min-w-[300px]">
                <option>1103 - Piutang Rekening Air</option>
                <option>1101 - Kas Besar</option>
              </select>
           </div>
           <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Bulan</label>
              <select className="bg-white border-slate-200 rounded-xl text-sm px-4 py-2 focus:ring-primary h-11">
                <option>Mei</option>
              </select>
           </div>
           <button className="h-11 px-8 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all mt-auto">
              Cari
           </button>
        </div>
      </div>

      <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center">
         <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-widest transition-all">
               <Printer size={16} /> Cetak
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-widest transition-all">
               <FileSpreadsheet size={16} /> Excel
            </button>
         </div>
         <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all">
            <Download size={18} /> Download PDF
         </button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border-t-8 border-accent overflow-hidden border border-slate-200">
        <div className="p-8 text-center border-b border-slate-100">
          <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-slate-800">Perusahaan Daerah Air Minum</h3>
          <h4 className="text-2xl font-black text-primary mt-1 tracking-tight">BUKU BESAR</h4>
          <div className="mt-4 flex flex-col items-center">
            <div className="px-4 py-1.5 bg-slate-100 rounded-full">
              <p className="text-sm font-bold text-slate-700">Akun: 1103 - Piutang Rekening Air</p>
            </div>
            <p className="text-slate-500 mt-2 font-medium">Periode: Mei 2024</p>
          </div>
          <div className="mt-4 flex justify-center gap-1">
            <div className="h-1 w-16 bg-primary rounded-full" />
            <div className="h-1 w-4 bg-accent rounded-full" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Tanggal</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">No. Referensi</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Keterangan</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Debit</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Kredit</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Saldo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mutations.map((m, i) => (
                <tr key={i} className={clsx("hover:bg-slate-50 transition-colors", m.type === 'init' && "bg-slate-50/50")}>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{m.date}</td>
                  <td className="px-6 py-4 text-sm font-mono font-bold text-primary">{m.ref}</td>
                  <td className={clsx("px-6 py-4 text-sm", m.type === 'init' ? "font-black text-slate-800 uppercase" : "text-slate-600")}>{m.desc}</td>
                  <td className="px-6 py-4 text-right tabular-nums text-sm font-bold text-slate-900">{m.debit > 0 ? `Rp ${m.debit.toLocaleString()}` : '-'}</td>
                  <td className="px-6 py-4 text-right tabular-nums text-sm font-bold text-rose-500">{m.credit > 0 ? `Rp ${m.credit.toLocaleString()}` : '-'}</td>
                  <td className="px-6 py-4 text-right tabular-nums text-sm font-black text-slate-900">Rp {m.balance.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
               <tr className="bg-primary text-white border-t border-primary">
                  <td className="px-6 py-5 text-sm font-black uppercase tracking-widest" colSpan={3}>Total Pergerakan & Saldo Akhir</td>
                  <td className="px-6 py-5 text-right font-bold">Rp 450.200.000</td>
                  <td className="px-6 py-5 text-right font-bold">Rp 270.350.000</td>
                  <td className="px-6 py-5 text-right font-black text-lg underline underline-offset-4 decoration-accent">Rp 265.250.000</td>
               </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

const clsx = (...classes: any[]) => classes.filter(Boolean).join(' ');
