
import React from 'react';
import { Bell, Search, HelpCircle, ChevronRight } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  onNavigate?: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const getBreadcrumb = () => {
    switch(activePage) {
      case 'dashboard': return 'Dashboard';
      case 'jurnal-umum': return 'Akuntansi / Jurnal Umum';
      case 'buku-besar': return 'Akuntansi / Buku Besar';
      case 'neraca': return 'Akuntansi / Laporan Keuangan / Neraca';
      case 'laba-rugi': return 'Akuntansi / Laporan Keuangan / Laba Rugi';
      case 'persediaan': return 'Persediaan';
      case 'pelanggan': return 'Pelanggan';
      case 'pengaturan': return 'Pengaturan Sistem';
      default: return activePage;
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span className="font-medium cursor-pointer hover:text-primary" onClick={() => onNavigate?.('dashboard')}>Beranda</span>
        <ChevronRight size={14} />
        <span className="font-bold text-slate-900">{getBreadcrumb()}</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari transaksi atau data..." 
            className="pl-10 pr-4 py-1.5 bg-slate-100 border-none rounded-lg text-sm w-72 focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
            <HelpCircle size={20} />
          </button>
        </div>

        <div className="h-8 w-px bg-slate-200"></div>

        <button 
          onClick={() => onNavigate?.('pengaturan')}
          className="flex items-center gap-3 hover:bg-slate-50 p-1 rounded-xl transition-colors text-left"
        >
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-none">Siti Rahmawati</p>
            <p className="text-[10px] text-slate-500 uppercase font-medium mt-1">Staf Akuntansi</p>
          </div>
          <div 
            className="size-9 rounded-xl bg-cover bg-center ring-2 ring-primary/20 shadow-sm"
            style={{ backgroundImage: `url(https://picsum.photos/seed/siti/200)` }}
          />
        </button>
      </div>
    </header>
  );
};
