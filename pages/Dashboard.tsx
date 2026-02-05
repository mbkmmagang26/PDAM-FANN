
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Wallet, 
  ShoppingCart, 
  Droplets,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mei', pendapatan: 400, pengeluaran: 240 },
  { name: 'Jun', pendapatan: 300, pengeluaran: 139 },
  { name: 'Jul', pendapatan: 200, pengeluaran: 980 },
  { name: 'Agu', pendapatan: 278, pengeluaran: 390 },
  { name: 'Sep', pendapatan: 189, pengeluaran: 480 },
  { name: 'Okt', pendapatan: 239, pengeluaran: 380 },
];

const nrwData = [
  { name: 'Mei', nrw: 28 },
  { name: 'Jun', nrw: 24 },
  { name: 'Jul', nrw: 30 },
  { name: 'Agu', nrw: 22 },
  { name: 'Sep', nrw: 19 },
  { name: 'Okt', nrw: 25 },
];

const COLORS = ['#137fec', '#e2e8f0'];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Selamat Datang, Admin</h2>
        <p className="text-slate-500 mt-1">Ringkasan kinerja operasional & keuangan PDAM hari ini.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Pendapatan Bulan Ini', value: 'Rp 450.000.000', trend: '+12.5%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Pengeluaran Bulan Ini', value: 'Rp 120.500.000', trend: '+5.2%', icon: TrendingDown, color: 'text-rose-500', bg: 'bg-rose-500/10' },
          { label: 'Saldo Kas & Bank', value: 'Rp 2.140.000.000', trend: '+2.1%', icon: Wallet, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Pelanggan Aktif', value: '12.450', trend: '-1%', icon: Users, color: 'text-slate-500', bg: 'bg-slate-100' },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={clsx("p-2.5 rounded-xl", stat.bg)}>
                <stat.icon size={22} className={stat.color} />
              </div>
              <span className={clsx("text-xs font-bold px-2 py-1 rounded-full", stat.color, stat.bg)}>{stat.trend}</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1 text-slate-900">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-lg font-bold text-slate-900">Tren Laba Rugi</h4>
              <p className="text-xs text-slate-500 font-medium">Perbandingan 6 bulan terakhir</p>
            </div>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
                  <div className="size-2 rounded-full bg-primary" /> Pendapatan
               </div>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
                  <div className="size-2 rounded-full bg-slate-300" /> Pengeluaran
               </div>
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPendapatan" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#137fec" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="pendapatan" stroke="#137fec" strokeWidth={3} fillOpacity={1} fill="url(#colorPendapatan)" />
                <Area type="monotone" dataKey="pengeluaran" stroke="#cbd5e1" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Collection Gauge */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between"
        >
          <div>
            <h4 className="text-lg font-bold text-slate-900">Capaian Penagihan</h4>
            <p className="text-xs text-slate-500 font-medium mt-1">Status realisasi penagihan air</p>
          </div>

          <div className="relative py-8 flex justify-center">
            <ResponsiveContainer width="100%" height={200}>
               <PieChart>
                  <Pie
                    data={[
                      { name: 'Realisasi', value: 82 },
                      { name: 'Sisa', value: 18 },
                    ]}
                    cx="50%"
                    cy="100%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    <Cell fill="#137fec" />
                    <Cell fill="#f1f5f9" />
                  </Pie>
               </PieChart>
            </ResponsiveContainer>
            <div className="absolute bottom-2 text-center">
               <p className="text-3xl font-black text-primary leading-none">82%</p>
               <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-2">Tertagih</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Target Penagihan</p>
               <p className="text-lg font-black text-slate-800">Rp 550.000.000</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
               <p className="text-[10px] uppercase font-bold text-primary tracking-wider">Realisasi</p>
               <p className="text-lg font-black text-primary">Rp 450.000.000</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
           <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-lg font-bold">Tren NRW (Non-Revenue Water)</h4>
                <p className="text-xs text-slate-500">Persentase kehilangan air operasional</p>
              </div>
              <div className="text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                 Target: &lt; 20%
              </div>
           </div>
           <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={nrwData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                  <Tooltip />
                  <Line type="monotone" dataKey="nrw" stroke="#f43f5e" strokeWidth={4} dot={{ r: 6, fill: '#f43f5e', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="flex flex-col gap-6">
           <div className="bg-primary p-6 rounded-3xl text-white shadow-xl shadow-primary/30 flex flex-col justify-between">
              <div>
                <div className="size-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                   <Droplets size={20} />
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider">NRW Bulan Ini</h5>
                <p className="text-3xl font-black mt-1">24.8%</p>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mt-4">
                 Masih terdapat anomali di Sektor 4B. Diperlukan inspeksi segera.
              </p>
           </div>

           <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h5 className="font-bold text-sm text-slate-900 mb-4">Tagihan Vendor</h5>
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">PT. Pipa Mas</span>
                    <span className="text-xs font-bold text-rose-500">Rp 45.2M</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">PLN Persero</span>
                    <span className="text-xs font-bold">Rp 82.1M</span>
                 </div>
                 <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest mt-2 transition-colors">
                    Kelola Tagihan
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const clsx = (...classes: any[]) => classes.filter(Boolean).join(' ');
