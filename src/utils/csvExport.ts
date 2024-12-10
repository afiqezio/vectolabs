import { Asset } from "../types/asset";

export const exportToCSV = (assets: Asset[]) => {
  const headers = ["Asset Name", "Department"];
  const csvContent = [
    headers.join(","),
    ...assets.map((asset) => `${asset.name},${asset.department}`),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  link.setAttribute("href", url);
  link.setAttribute("download", "assets.csv");
  link.style.visibility = "hidden";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};