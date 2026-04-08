import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Edit2, 
  Trash2, 
  UserPlus,
  Filter,
  Download,
  FileSpreadsheet
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const mockEmployees = [
  {
    id: '1',
    fullName: 'Nguyễn Văn A',
    email: 'vana@bonamedia.vn',
    phone: '0901234567',
    position: 'Đạo diễn',
    department: 'Sản xuất',
    joinDate: '2023-01-15',
    salaryBase: 25000000,
    status: 'active',
  },
  {
    id: '2',
    fullName: 'Trần Thị B',
    email: 'thib@bonamedia.vn',
    phone: '0907654321',
    position: 'Biên tập viên',
    department: 'Hậu kỳ',
    joinDate: '2023-03-20',
    salaryBase: 18000000,
    status: 'active',
  },
  {
    id: '3',
    fullName: 'Lê Văn C',
    email: 'vanc@bonamedia.vn',
    phone: '0912345678',
    position: 'Quay phim',
    department: 'Sản xuất',
    joinDate: '2023-06-10',
    salaryBase: 20000000,
    status: 'probation',
  },
  {
    id: '4',
    fullName: 'Phạm Minh D',
    email: 'minhd@bonamedia.vn',
    phone: '0987654321',
    position: 'Kỹ thuật âm thanh',
    department: 'Kỹ thuật',
    joinDate: '2022-11-05',
    salaryBase: 15000000,
    status: 'active',
  },
];

export default function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = mockEmployees.filter(emp => 
    emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Tìm kiếm nhân viên..." 
            className="pl-10 bg-card/50 border-border/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 border-border/50">
            <Filter className="w-4 h-4" /> Lọc
          </Button>
          <Button variant="outline" className="gap-2 border-border/50">
            <Download className="w-4 h-4" /> Xuất file
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4" /> Thêm nhân viên
          </Button>
        </div>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="hover:bg-transparent border-border/50">
                <TableHead className="w-[300px]">Nhân viên</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Vị trí</TableHead>
                <TableHead>Ngày gia nhập</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id} className="border-border/50 hover:bg-muted/20 transition-colors">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border border-primary/10">
                        <AvatarImage src={employee.avatarUrl || `https://picsum.photos/seed/${employee.id}/200`} />
                        <AvatarFallback>{employee.fullName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-bold">{employee.fullName}</span>
                        <span className="text-xs text-muted-foreground">{employee.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {employee.position}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{employee.joinDate}</TableCell>
                  <TableCell>
                    <Badge 
                      className={cn(
                        "capitalize",
                        employee.status === 'active' ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20" : 
                        employee.status === 'probation' ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20" : 
                        "bg-rose-500/10 text-rose-500 hover:bg-rose-500/20"
                      )}
                    >
                      {employee.status === 'active' ? 'Đang làm việc' : employee.status === 'probation' ? 'Thử việc' : 'Nghỉ việc'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border-border">
                        <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
                        <DropdownMenuItem className="gap-2">
                          <Edit2 className="w-4 h-4" /> Chỉnh sửa
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <FileSpreadsheet className="w-4 h-4" /> Xem bảng lương
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-border" />
                        <DropdownMenuItem className="gap-2 text-rose-500 focus:text-rose-500">
                          <Trash2 className="w-4 h-4" /> Xóa nhân viên
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
