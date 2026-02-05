
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  Printer, 
  ChevronRight, 
  Info, 
  X, 
  Trash2,
  Save,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const JournalUmum: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  const mockJournals = [
    { id: '1', date: '05/05/2024', ref: 'JU/2024/05/001', desc: 'Penerimaan Rekening Air Cabang Tengah', lines: [
      { code: '1101', name: 'Kas Besar', debit: 12500000, credit: 0 },
      { code: '1103', name: 'Piutang Rekening Air', debit: 0, credit: 12500000 },
    ]},
    { id: '2', date: '12/05/2024', ref: 'JU/2024/05/042', desc: 'Tagihan Rekening Air Periode Mei 2024', lines: [
      { code: '1103', name: 'Piutang Rekening Air', debit: 450200000, credit: 0 },
      { code: '4101', name: 'Pendapatan Penjualan Air', debit: 0, credit: 450200000 },
    ]},
    { id: '3', date: '20/05/2024', ref: 'JU/2024/05/112', desc: 'Koreksi Piutang Pelanggan 00129', lines: [
      { code: '4101', name: 'Pendapatan Penjualan Air', debit: 150000, credit: 0 },
      { code: '1103', name: 'Piutang Rekening Air', debit: 0, credit: 150000 },
    ]},
  ];

  const handleOpenDetail = (entry: any) => {
    setSelectedEntry(entry);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Jurnal Umum</h2>
          <p className="text-slate-500 mt-1">Catatan kronologis seluruh transaksi keuangan perusahaan.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
           <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Periode</label>
              <select className="bg-white border-slate-200 rounded-xl text-sm px-4 py-2 focus:ring-primary h-11">
                <option>Bulanan</option>
                <option>Harian</option>
              </select>
           </div>
           <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Bulan</label>
              <select className="bg-white border-slate-200 rounded-xl text-sm px-4 py-2 focus:ring-primary h-11">
                <option>Mei</option>
                <option>April</option>
              </select>
           </div>
           <button className="h-11 px-6 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-2 mt-auto">
              Filter
           </button>
           <button 
            onClick={() => setIsAddModalOpen(true)}
            className="h-11 px-6 bg-accent text-slate-900 rounded-xl text-sm font-bold shadow-lg shadow-accent/20 hover:brightness-110 transition-all flex items-center gap-2 mt-auto"
           >
              <Plus size={18} />
              Tambah Jurnal
           </button>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-3xl shadow-xl border-t-8 border-accent overflow-hidden border border-slate-200">
        <div className="p-8 text-center border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-slate-800">Perusahaan Daerah Air Minum</h3>
          <h4 className="text-2xl font-black text-primary mt-1 tracking-tight">JURNAL UMUM</h4>
          <p className="text-slate-500 mt-2 font-medium">Periode: Mei 2024</p>
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
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Nama Akun / Keterangan</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Debit</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Kredit</th>
                <th className="px-6 py-4 w-12 border-b border-slate-100"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockJournals.map((journal) => (
                <React.Fragment key={journal.id}>
                  <tr className="group hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-500 font-medium align-top" rowSpan={2}>{journal.date}</td>
                    <td className="px-6 py-4 text-sm font-mono font-bold text-primary align-top" rowSpan={2}>
                       <button onClick={() => handleOpenDetail(journal)} className="hover:underline">{journal.ref}</button>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-800">{journal.lines[0].code} - {journal.lines[0].name}</p>
                      <p className="text-[11px] text-slate-400 italic mt-0.5">{journal.desc}</p>
                    </td>
                    <td className="px-6 py-4 text-right tabular-nums text-sm font-bold text-slate-900">Rp {journal.lines[0].debit.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right text-slate-300">-</td>
                    <td className="px-6 py-4 text-center align-middle" rowSpan={2}>
                       <button onClick={() => handleOpenDetail(journal)} className="text-slate-300 hover:text-primary">
                          <Info size={20} />
                       </button>
                    </td>
                  </tr>
                  <tr className="group hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 pl-14">
                      <p className="text-sm font-bold text-slate-800">{journal.lines[1].code} - {journal.lines[1].name}</p>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-300">-</td>
                    <td className="px-6 py-4 text-right tabular-nums text-sm font-bold text-rose-600">Rp {journal.lines[1].credit.toLocaleString()}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary text-white border-t border-primary">
                 <td className="px-6 py-5 text-sm font-black uppercase tracking-widest" colSpan={3}>Total Transaksi Periode Ini</td>
                 <td className="px-6 py-5 text-right font-black text-lg">Rp 462.850.000</td>
                 <td className="px-6 py-5 text-right font-black text-lg">Rp 462.850.000</td>
                 <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="bg-slate-50 px-8 py-4 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
           <span>Dokumen otomatis sistem PDAM</span>
           <span>Halaman 1 dari 12 | Cetak: 24 Mei 2024</span>
        </div>
      </div>

      {/* Side Detail Panel */}
      <AnimatePresence>
        {isDetailOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
            />
            <motion.aside 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[500px] bg-white shadow-2xl z-[60] flex flex-col border-l border-slate-200"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 leading-none">Detail Jurnal</h2>
                    <p className="text-xs text-slate-500 mt-1 font-mono uppercase tracking-wider">Ref: {selectedEntry?.ref}</p>
                  </div>
                </div>
                <button onClick={() => setIsDetailOpen(false)} className="size-8 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
                  <X size={20} className="text-slate-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Informasi Transaksi</h4>
                  <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Tanggal</p>
                      <p className="text-sm font-bold text-slate-800">{selectedEntry?.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Sumber</p>
                      <p className="text-sm font-bold text-slate-800">Modul Piutang</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Keterangan</p>
                      <p className="text-sm font-bold text-slate-800 leading-relaxed">{selectedEntry?.desc}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Bukti Fisik</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-mono text-primary font-bold">BKM-2024-00129</span>
                        <ExternalLink size={14} className="text-slate-400 hover:text-primary cursor-pointer" />
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Oleh</p>
                      <p className="text-sm font-bold text-slate-800">Siti Rahmawati (15:02)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Entri Jurnal (Balanced)</h4>
                   <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                     <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                          <tr>
                            <th className="px-4 py-3 text-left">Akun</th>
                            <th className="px-4 py-3 text-right">Debit</th>
                            <th className="px-4 py-3 text-right">Kredit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {selectedEntry?.lines.map((line: any, i: number) => (
                            <tr key={i} className={clsx(line.credit > 0 && "bg-slate-50/50")}>
                              <td className={clsx("px-4 py-3", line.credit > 0 && "pl-8 italic")}>
                                <p className="font-bold text-slate-800">{line.code}</p>
                                <p className="text-xs text-slate-400">{line.name}</p>
                              </td>
                              <td className="px-4 py-3 text-right font-mono font-bold text-primary">{line.debit > 0 ? `Rp ${line.debit.toLocaleString()}` : '-'}</td>
                              <td className="px-4 py-3 text-right font-mono font-bold text-rose-500">{line.credit > 0 ? `Rp ${line.credit.toLocaleString()}` : '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="bg-slate-50 border-t border-slate-100 font-black">
                          <tr>
                             <td className="px-4 py-3 text-slate-800 text-[10px] uppercase tracking-widest">Total</td>
                             <td className="px-4 py-3 text-right font-mono">12.500.000</td>
                             <td className="px-4 py-3 text-right font-mono">12.500.000</td>
                          </tr>
                        </tfoot>
                     </table>
                   </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 flex gap-3 bg-slate-50/50">
                 <button className="flex-1 bg-white border border-slate-200 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                    <Printer size={18} />
                    Cetak Voucher
                 </button>
                 <button className="flex-1 bg-primary text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-primary/20 transition-all">
                    Audit Trail
                 </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Add Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsAddModalOpen(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            >
               <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                       <Plus size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-slate-900 leading-none">Tambah Jurnal Baru</h3>
                       <p className="text-sm text-slate-500 mt-1">Catat transaksi manual secara kronologis</p>
                    </div>
                  </div>
                  <button onClick={() => setIsAddModalOpen(false)} className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                    <X size={24} className="text-slate-400" />
                  </button>
               </div>

               <div className="p-8 space-y-8 overflow-y-auto max-h-[70vh] custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tanggal Transaksi</label>
                        <input type="date" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:ring-primary focus:border-primary text-sm h-11" defaultValue="2024-05-24" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No. Referensi</label>
                        <input type="text" readOnly value="JU/2024/05/144" className="w-full rounded-xl border-slate-200 bg-slate-100 font-mono font-bold text-primary text-sm h-11" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Keterangan Umum</label>
                        <input type="text" placeholder="Contoh: Pembelian ATK Kantor" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:ring-primary focus:border-primary text-sm h-11" />
                     </div>
                  </div>

                  <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                     <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                           <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              <th className="px-4 py-4 text-left w-1/3">Pilih Akun</th>
                              <th className="px-4 py-4 text-right w-40">Debit</th>
                              <th className="px-4 py-4 text-right w-40">Kredit</th>
                              <th className="px-4 py-4 text-left">Catatan</th>
                              <th className="px-4 py-4 w-12"></th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                           <tr className="group">
                              <td className="p-2">
                                 <select className="w-full border-none focus:ring-0 bg-transparent text-sm font-bold">
                                    <option>5101 - Beban Gaji</option>
                                    <option>1101 - Kas Besar</option>
                                 </select>
                              </td>
                              <td className="p-2">
                                 <input type="number" defaultValue={15000000} className="w-full border-none focus:ring-0 bg-transparent text-right font-mono font-bold" />
                              </td>
                              <td className="p-2">
                                 <input type="number" defaultValue={0} className="w-full border-none focus:ring-0 bg-transparent text-right font-mono font-bold" />
                              </td>
                              <td className="p-2">
                                 <input type="text" placeholder="Catatan baris..." className="w-full border-none focus:ring-0 bg-transparent text-xs" />
                              </td>
                              <td className="p-2 text-center">
                                 <button className="text-slate-300 hover:text-rose-500"><Trash2 size={16} /></button>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <div className="p-4 bg-slate-50/50">
                        <button className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
                           <Plus size={14} className="stroke-[3px]" />
                           Tambah Baris
                        </button>
                     </div>
                  </div>
               </div>

               <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-10">
                     <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Debit</p>
                        <p className="text-xl font-mono font-black text-slate-900">Rp 15.000.000</p>
                     </div>
                     <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Kredit</p>
                        <p className="text-xl font-mono font-black text-slate-900">Rp 15.000.000</p>
                     </div>
                     <div className="h-10 w-px bg-slate-200" />
                     <div className="flex items-center gap-3 text-emerald-600">
                        <CheckCircle2 size={24} />
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Status</p>
                           <p className="text-xl font-black">Seimbang</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <button 
                        onClick={() => setIsAddModalOpen(false)}
                        className="px-8 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 hover:bg-white transition-all"
                     >
                        Batal
                     </button>
                     <button className="px-10 py-3 rounded-2xl bg-primary text-white text-sm font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:brightness-110 transition-all">
                        <Save size={18} />
                        Simpan Jurnal
                     </button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Added local clsx helper to resolve missing reference
const clsx = (...classes: any[]) => classes.filter(Boolean).join(' ');
