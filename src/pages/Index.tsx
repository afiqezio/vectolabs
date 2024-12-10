import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { AssetTable } from "@/components/AssetTable";
import { initialAssets } from "@/types/asset";
import { exportToCSV } from "@/utils/csvExport";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredAssets = initialAssets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    exportToCSV(filteredAssets);
    toast({
      title: "Export Successful",
      description: "Your assets have been exported to CSV",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Asset Management</h1>
          <p className="text-gray-600">View and manage your organization's assets</p>
        </div>
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <Button
            onClick={handleExport}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Export to CSV
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <AssetTable assets={filteredAssets} />
        </div>
      </div>
    </div>
  );
};

export default Index;