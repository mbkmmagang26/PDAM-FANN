
export type Page = 'dashboard' | 'jurnal-umum' | 'buku-besar' | 'neraca' | 'laba-rugi' | 'aset-tetap' | 'persediaan' | 'pelanggan' | 'pengaturan';

export interface JournalEntry {
  id: string;
  date: string;
  reference: string;
  description: string;
  source: string;
  lines: JournalLine[];
  status: 'draft' | 'posted';
  createdBy: string;
}

export interface JournalLine {
  accountCode: string;
  accountName: string;
  debit: number;
  credit: number;
  note?: string;
}

export interface LedgerMutation {
  date: string;
  reference: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

export interface InventoryItem {
  code: string;
  name: string;
  category: string;
  unit: string;
  stock: number;
  minStock: number;
  status: 'Aman' | 'Stok Rendah' | 'Kosong';
}
