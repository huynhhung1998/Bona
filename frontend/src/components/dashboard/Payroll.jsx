import React, { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  Upload, 
  Search, 
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';


const mockPayroll = [
    
  {
    id: '1',
    employeeId: '1',
    employeeName: 'Nguyễn Văn A',
    month: '2026-03',
    baseSalary: 25000000,
    allowance: 2000000,
    bonus: 5000000,
    deduction: 500000,
    totalSalary: 31500000,
    status: 'paid',
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Trần Thị B',
    month: '2026-03',
    baseSalary: 18000000,
    allowance: 1500000,
    bonus: 2000000,
    deduction: 200000,
    totalSalary: 21300000,
    status: 'draft',
  },
];

export default function PayrollManagement() {
  const [isUploading, setIsUploading] = useState(false);

 const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        
        console.log('Parsed Excel Data:', data);
        
        setTimeout(() => {
          toast.success(`Đã xử lý file chấm công: ${data.length} bản ghi được nhận diện.`);
          setIsUploading(false);
        }, 1500);
      } catch (error) {
        toast.error('Lỗi khi đọc file Excel. Vui lòng kiểm tra lại định dạng.');
        setIsUploading(false);
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Quản lý lương</h1>
          <p className="text-muted-foreground">Tính toán và chi trả lương dựa trên dữ liệu chấm công.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="file"
              id="excel-upload"
              className="hidden"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
            />
            <Button 
              variant="outline" 
              className="gap-2 border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('excel-upload')?.click()}
              disabled={isUploading}
            >
              <Upload className="w-4 h-4" /> {isUploading ? "Đang xử lý..." : "Upload chấm công"}
            </Button>
          </div>
          <Button className="gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <TrendingUp className="w-4 h-4" /> Chốt lương tháng
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Tổng quỹ lương tháng 3</p>
                <h3 className="text-2xl font-bold mt-1">1.245.000.000đ</h3>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <CreditCard className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Đã chi trả</p>
                <h3 className="text-2xl font-bold mt-1">850.000.000đ</h3>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Chưa chi trả</p>
                <h3 className="text-2xl font-bold mt-1">395.000.000đ</h3>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <AlertCircle className="w-6 h-6 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payroll Table */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="font-display">Bảng lương chi tiết</CardTitle>
            <CardDescription>Tháng 03/2026</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm nhân viên..." className="pl-9 h-9 w-64 bg-background/50 border-border/50" />
            </div>
            <Button variant="outline" size="sm" className="gap-2 border-border/50">
              <Download className="w-4 h-4" /> Xuất Excel
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="hover:bg-transparent border-border/50">
                <TableHead>Nhân viên</TableHead>
                <TableHead>Lương cơ bản</TableHead>
                <TableHead>Phụ cấp</TableHead>
                <TableHead>Thưởng</TableHead>
                <TableHead>Khấu trừ</TableHead>
                <TableHead className="font-bold text-primary">Thực nhận</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPayroll.map((item) => (
                <TableRow key={item.id} className="border-border/50 hover:bg-muted/20 transition-colors">
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span className="font-bold">{item.employeeName}</span>
                      <span className="text-xs text-muted-foreground">ID: {item.employeeId}</span>
                    </div>
                  </TableCell>
                  <TableCell>{item.baseSalary.toLocaleString()}đ</TableCell>
                  <TableCell>{item.allowance.toLocaleString()}đ</TableCell>
                  <TableCell className="text-emerald-500">+{item.bonus.toLocaleString()}đ</TableCell>
                  <TableCell className="text-rose-500">-{item.deduction.toLocaleString()}đ</TableCell>
                  <TableCell className="font-bold text-lg">{item.totalSalary.toLocaleString()}đ</TableCell>
                  <TableCell>
                    <Badge className={item.status === 'paid' ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}>
                      {item.status === 'paid' ? 'Đã thanh toán' : 'Chờ duyệt'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-2">
                      Chi tiết <ArrowRight className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
