import React, { useState } from 'react';
import { 
  Calendar, 
  Plus, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Filter,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const mockRequests = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'Nguyễn Văn A',
    type: 'annual',
    startDate: '2026-04-10',
    endDate: '2026-04-12',
    reason: 'Giải quyết việc gia đình',
    status: 'pending',
    createdAt: '2026-04-05',
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Trần Thị B',
    type: 'sick',
    startDate: '2026-04-01',
    endDate: '2026-04-02',
    reason: 'Sốt xuất huyết',
    status: 'approved',
    createdAt: '2026-03-30',
  },
  {
    id: '3',
    employeeId: '3',
    employeeName: 'Lê Văn C',
    type: 'unpaid',
    startDate: '2026-04-15',
    endDate: '2026-04-20',
    reason: 'Đi du lịch cá nhân',
    status: 'rejected',
    createdAt: '2026-04-01',
  },
];

export default function LeaveManagement() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredRequests = activeTab === 'all' 
    ? mockRequests 
    : mockRequests.filter(r => r.status === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Quản lý nghỉ phép</h1>
          <p className="text-muted-foreground">Theo dõi và phê duyệt các đơn xin nghỉ phép của nhân viên.</p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Tạo đơn mới
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-4">
          <TabsList className="bg-muted/50 p-1 border border-border/50">
            <TabsTrigger value="all" className="data-[state=active]:bg-card">Tất cả</TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-card">Chờ duyệt</TabsTrigger>
            <TabsTrigger value="approved" className="data-[state=active]:bg-card">Đã duyệt</TabsTrigger>
            <TabsTrigger value="rejected" className="data-[state=active]:bg-card">Đã từ chối</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm" className="gap-2 border-border/50">
            <Filter className="w-4 h-4" /> Lọc nâng cao
          </Button>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 gap-4">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="p-6 flex-1 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex items-center gap-4 min-w-[200px]">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{request.employeeName}</p>
                          <p className="text-xs text-muted-foreground">Mã NV: #{request.employeeId}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 min-w-[150px]">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Loại nghỉ</span>
                        <Badge variant="outline" className="w-fit bg-primary/5 text-primary border-primary/20 capitalize">
                          {request.type === 'annual' ? 'Nghỉ phép năm' : request.type === 'sick' ? 'Nghỉ bệnh' : 'Nghỉ không lương'}
                        </Badge>
                      </div>

                      <div className="flex flex-col gap-1 min-w-[180px]">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Thời gian</span>
                        <p className="text-sm font-medium">{request.startDate} → {request.endDate}</p>
                      </div>

                      <div className="flex flex-col gap-1 flex-1">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Lý do</span>
                        <p className="text-sm text-muted-foreground line-clamp-1">{request.reason}</p>
                      </div>

                      <div className="flex flex-col gap-1 min-w-[120px]">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Trạng thái</span>
                        <div className="flex items-center gap-2">
                          {request.status === 'pending' && <Clock className="w-4 h-4 text-amber-500" />}
                          {request.status === 'approved' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                          {request.status === 'rejected' && <XCircle className="w-4 h-4 text-rose-500" />}
                          <span className={cn(
                            "text-sm font-bold capitalize",
                            request.status === 'pending' ? "text-amber-500" : 
                            request.status === 'approved' ? "text-emerald-500" : 
                            "text-rose-500"
                          )}>
                            {request.status === 'pending' ? 'Chờ duyệt' : request.status === 'approved' ? 'Đã duyệt' : 'Từ chối'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 md:p-6 flex md:flex-col gap-2 border-t md:border-t-0 md:border-l border-border/50">
                      {request.status === 'pending' ? (
                        <>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1 md:w-full">Duyệt</Button>
                          <Button size="sm" variant="outline" className="border-rose-500/50 text-rose-500 hover:bg-rose-500/10 flex-1 md:w-full">Từ chối</Button>
                        </>
                      ) : (
                        <Button size="sm" variant="ghost" className="gap-2 flex-1 md:w-full">
                          Chi tiết <ChevronRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
