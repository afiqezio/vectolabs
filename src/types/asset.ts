export interface Asset {
  name: string;
  department: string;
}

export const initialAssets: Asset[] = [
  { name: "Printer", department: "HR" },
  { name: "Monitor", department: "IT" },
  { name: "Barcode Scanner", department: "ACCOUNT" },
];