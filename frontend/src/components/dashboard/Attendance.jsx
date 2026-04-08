import React from 'react';
import { 
  Clock, 
  Search, 
  Filter, 
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  AlertTriangle
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


const mockLateRequests = [
  {
    id: '1',
    employeeId: '4',
    employeeName: 'Phạm Minh D',
    date: '2026-04-08',
    reason: 'Kẹt xe hầm Thủ Thiêm',
    status: 'pending',
    createdAt: '2026-04-08T08:15:00Z',
  },
  {
    id: '2',
    employeeId: '3',
    employeeName: 'Lê Văn C',
    date: '2026-04-07',
    reason: 'Hư xe trên đường đi làm',
    status: 'approved',
    createdAt: '2026-04-07T08:30:00Z',
  },
];

export default function LateManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Quản lý đi trễ</h1>
          <p className="text-muted-foreground">Theo dõi và xử lý các trường hợp đi trễ của nhân viên.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Tìm nhân viên..." className="pl-9 h-9 w-64 bg-card/50 border-border/50" />
          </div>
          <Button variant="outline" size="sm" className="gap-2 border-border/50">
            <Filter className="w-4 h-4" /> Lọc
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary Stats */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-display">Thống kê hôm nay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium">Đang chờ duyệt</span>
              </div>
              <span className="text-xl font-bold text-amber-500">5</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Đã chấp nhận</span>
              </div>
              <span className="text-xl font-bold text-emerald-500">12</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-rose-500" />
                <span className="text-sm font-medium">Đã từ chối</span>
              </div>
              <span className="text-xl font-bold text-rose-500">2</span>
            </div>
          </CardContent>
        </Card>

        {/* Requests Table */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-display">Danh sách đơn báo trễ</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead>Nhân viên</TableHead>
                  <TableHead>Ngày báo</TableHead>
                  <TableHead>Lý do</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLateRequests.map((request) => (
                  <TableRow key={request.id} className="border-border/50 hover:bg-muted/20 transition-colors">
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span className="font-bold">{request.employeeName}</span>
                        <span className="text-xs text-muted-foreground">ID: {request.employeeId}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{request.date}</TableCell>
                    <TableCell className="text-sm max-w-[200px] truncate">{request.reason}</TableCell>
                    <TableCell>
                      <Badge className={cn(
                        "capitalize",
                        request.status === 'pending' ? "bg-amber-500/10 text-amber-500" : 
                        request.status === 'approved' ? "bg-emerald-500/10 text-emerald-500" : 
                        "bg-rose-500/10 text-rose-500"
                      )}>
                        {request.status === 'pending' ? 'Chờ duyệt' : request.status === 'approved' ? 'Đã duyệt' : 'Từ chối'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {request.status === 'pending' && (
                          <>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-500 hover:bg-emerald-500/10">
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-rose-500 hover:bg-rose-500/10">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Warning Section */}
      <Card className="border-rose-500/20 bg-rose-500/5 backdrop-blur-sm">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="p-3 bg-rose-500/20 rounded-full">
            <AlertTriangle className="w-6 h-6 text-rose-500" />
          </div>
          <div>
            <h4 className="font-bold text-rose-500">Cảnh báo vi phạm chuyên cần</h4>
            <p className="text-sm text-muted-foreground">Có 3 nhân viên đã đi trễ quá 3 lần trong tháng này. Hệ thống đề xuất gửi thông báo nhắc nhở.</p>
          </div>
          <Button variant="outline" className="ml-auto border-rose-500/50 text-rose-500 hover:bg-rose-500/10">
            Xem danh sách
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
