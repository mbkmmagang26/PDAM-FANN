
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookText, 
  BookCopy, 
  FilePieChart, 
  Warehouse, 
  Users, 
  Settings, 
  LogOut,
  ChevronDown,
  WaterDrop,
  Droplets
} from 'lucide-react';
import { Page } from '../types';
import { clsx } from 'clsx';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
}

// Fixed NavItem props type to allow standard React props like key
interface NavItemProps {
  item: any;
  isSub?: boolean;
  level?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate, onLogout }) => {
  const [isAccountingOpen, setIsAccountingOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { 
      id: 'accounting', 
      label: 'Akuntansi', 
      icon: BookText, 
      hasSub: true,
      subItems: [
        { id: 'jurnal-umum', label: 'Jurnal Umum' },
        { id: 'buku-besar', label: 'Buku Besar' },
        { id: 'laporan-keuangan', label: 'Laporan Keuangan', hasSub: true, subItems: [
           { id: 'neraca', label: 'Neraca' },
           { id: 'laba-rugi', label: 'Laba Rugi' },
        ]},
      ] 
    },
    { id: 'persediaan', label: 'Persediaan', icon: Warehouse },
    { id: 'pelanggan', label: 'Pelanggan', icon: Users },
  ];

  // Using React.FC to define the local component helps TypeScript recognize it and allow React-specific props like 'key'
  const NavItem: React.FC<NavItemProps> = ({ item, isSub = false, level = 0 }) => {
    const isActive = activePage === item.id;
    const isParentActive = item.subItems?.some((sub: any) => sub.id === activePage || sub.subItems?.some((ss: any) => ss.id === activePage));
    
    return (
      <div className="w-full">
        <button
          onClick={() => item.hasSub ? setIsAccountingOpen(!isAccountingOpen) : onNavigate(item.id)}
          className={clsx(
            "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200",
            isActive || (isParentActive && !isAccountingOpen) ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-400 hover:bg-slate-800 hover:text-white",
            level > 0 && "pl-12 py-2"
          )}
        >
          <div className="flex items-center gap-3">
            {item.icon && <item.icon size={20} />}
            {level > 0 && <div className={clsx("w-1.5 h-1.5 rounded-full", isActive ? "bg-white" : "bg-slate-600")} />}
            <span className={clsx("text-sm", (isActive || isParentActive) ? "font-bold" : "font-medium")}>{item.label}</span>
          </div>
          {item.hasSub && (
            <ChevronDown size={16} className={clsx("transition-transform duration-200", isAccountingOpen && "rotate-180")} />
          )}
        </button>

        {item.hasSub && isAccountingOpen && (
          <div className="mt-1 space-y-1">
            {item.subItems.map((sub: any) => (
              <div key={sub.id}>
                {sub.hasSub ? (
                   <div className="space-y-1">
                      <div className="px-12 py-2 text-[10px] font-black uppercase text-slate-500 tracking-widest mt-2">{sub.label}</div>
                      {sub.subItems.map((ss: any) => (
                        <NavItem key={ss.id} item={ss} isSub level={2} />
                      ))}
                   </div>
                ) : (
                  <NavItem item={sub} isSub level={1} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-72 bg-[#0d141b] text-white flex flex-col shrink-0 h-full">
      <div className="p-8 flex items-center gap-4">
        <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <Droplets size={24} fill="currentColor" />
        </div>
        <div>
          <h1 className="font-black text-xl leading-none uppercase tracking-tight">PDAM</h1>
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">SIA - Enterprise</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto custom-scrollbar">
        <div>
          <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-4">Modul Utama</p>
          <div className="space-y-1">
            {menuItems.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={() => onNavigate('pengaturan')}
          className={clsx(
            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
            activePage === 'pengaturan' ? "bg-primary text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"
          )}
        >
          <Settings size={20} />
          <span className="text-sm font-medium">Pengaturan</span>
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-900/20 rounded-xl transition-all mt-1"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Log Keluar</span>
        </button>
      </div>
    </aside>
  );
};
