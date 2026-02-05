
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { JournalUmum } from './pages/JournalUmum';
import { BukuBesar } from './pages/BukuBesar';
import { Neraca } from './pages/Neraca';
import { LabaRugi } from './pages/LabaRugi';
import { Inventory } from './pages/Inventory';
import { Customers } from './pages/Customers';
import { Settings } from './pages/Settings';
import { Logout } from './pages/Logout';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Logout onLogin={() => {
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    }} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'jurnal-umum': return <JournalUmum />;
      case 'buku-besar': return <BukuBesar />;
      case 'neraca': return <Neraca />;
      case 'laba-rugi': return <LabaRugi />;
      case 'persediaan': return <Inventory />;
      case 'pelanggan': return <Customers />;
      case 'pengaturan': return <Settings />;
      default: return (
        <div className="flex items-center justify-center h-full text-slate-400">
          <p>Halaman ini sedang dalam pengembangan.</p>
        </div>
      );
    }
  };

  return (
    <Layout 
      activePage={currentPage} 
      onNavigate={setCurrentPage}
      onLogout={() => setIsLoggedIn(false)}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;
