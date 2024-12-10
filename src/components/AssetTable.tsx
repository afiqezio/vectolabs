import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Asset } from "@/types/asset";

interface AssetTableProps {
  assets: Asset[];
}

export const AssetTable = ({ assets }: AssetTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Asset Name</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{asset.name}</TableCell>
              <TableCell>{asset.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};