
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate, onLogout }) => {
  return (
    <div className="flex h-screen w-full bg-[#f6f7f8] text-slate-900 overflow-hidden">
      <Sidebar activePage={activePage} onNavigate={onNavigate} onLogout={onLogout} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header activePage={activePage} onNavigate={onNavigate} />
        <main className="flex-1 overflow-y-auto custom-scrollbar p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
