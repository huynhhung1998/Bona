function Home() {
  return <h1>Dashboard tổng quan</h1>;
}
import { 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Film, 
  Star,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Button } from "@/components/ui/button";

const data = [
  { name: 'T1', value: 400 },
  { name: 'T2', value: 300 },
  { name: 'T3', value: 600 },
  { name: 'T4', value: 800 },
  { name: 'T5', value: 500 },
  { name: 'T6', value: 900 },
];

const payrollData = [
  { name: 'Sản xuất', value: 120 },
  { name: 'Hậu kỳ', value: 80 },
  { name: 'Kỹ thuật', value: 45 },
  { name: 'Marketing', value: 30 },
  { name: 'Hành chính', value: 25 },
];

const StatCard = ({ title, value, icon: Icon, trend, trendValue, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-3xl font-display font-bold">{value}</h3>
            <div className="flex items-center gap-1 text-xs">
              {trend === 'up' ? (
                <span className="text-emerald-500 flex items-center">
                  <ArrowUpRight className="w-3 h-3" /> +{trendValue}%
                </span>
              ) : (
                <span className="text-rose-500 flex items-center">
                  <ArrowDownRight className="w-3 h-3" /> -{trendValue}%
                </span>
              )}
              <span className="text-muted-foreground ml-1">so với tháng trước</span>
            </div>
          </div>
          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Chào buổi sáng, Admin!</h1>
          <p className="text-muted-foreground">Dưới đây là tóm tắt hoạt động của Bona Media hôm nay.</p>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg border border-border/50">
          <div className="px-4 py-2 bg-card rounded-md shadow-sm text-sm font-medium">Hôm nay</div>
          <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Tuần này</div>
          <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Tháng này</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Tổng nhân viên" 
          value="124" 
          icon={Users} 
          trend="up" 
          trendValue="12" 
          delay={0.1}
        />
        <StatCard 
          title="Đơn nghỉ phép" 
          value="8" 
          icon={Calendar} 
          trend="down" 
          trendValue="5" 
          delay={0.2}
        />
        <StatCard 
          title="Đi trễ hôm nay" 
          value="3" 
          icon={Clock} 
          trend="up" 
          trendValue="2" 
          delay={0.3}
        />
        <StatCard 
          title="Dự án đang chạy" 
          value="15" 
          icon={Film} 
          trend="up" 
          trendValue="8" 
          delay={0.4}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-display">Biểu đồ tăng trưởng nhân sự</CardTitle>
            <CardDescription>Số lượng nhân viên gia nhập theo tháng</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] pl-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b0000" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b0000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#737373" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#737373" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141414', border: '1px solid #262626', borderRadius: '8px' }}
                  itemStyle={{ color: '#f5f5f5' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8b0000" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-display">Phân bổ nhân sự</CardTitle>
            <CardDescription>Theo phòng ban sản xuất</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={payrollData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  stroke="#737373" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  width={80}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#141414', border: '1px solid #262626', borderRadius: '8px' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {payrollData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#8b0000' : '#3f0000'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-display">Hoạt động gần đây</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { user: "Nguyễn Văn A", action: "đã nộp đơn xin nghỉ phép", time: "10 phút trước", icon: Calendar, color: "text-blue-500" },
              { user: "Trần Thị B", action: "đã được duyệt tăng lương", time: "2 giờ trước", icon: TrendingUp, color: "text-emerald-500" },
              { user: "Lê Văn C", action: "đã đi trễ 15 phút", time: "4 giờ trước", icon: Clock, color: "text-amber-500" },
              { user: "Phạm Minh D", action: "đã hoàn thành hồ sơ nhân viên mới", time: "Hôm qua", icon: Users, color: "text-purple-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={cn("p-2 rounded-full bg-muted group-hover:bg-muted/80 transition-colors", item.color)}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      <span className="font-bold">{item.user}</span> {item.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">Chi tiết</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

