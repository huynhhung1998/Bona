// src/components/ui/Sidebar.jsx
import React from 'react';
import { LayoutDashboard, Users, Clock, Calendar, DollarSign, LogOut  } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const items = [
    { label: 'Bảng điều khiển', icon: LayoutDashboard, key: 'dashboard' },
    { label: 'Quản lý nhân sự', icon: Users, key: 'crew' },
    { label: 'Chấm công', icon: Clock, key: 'attendance' },
    { label: 'Đơn nghỉ phép', icon: Calendar, key: 'leave' },
    { label: 'Bảng lương', icon: DollarSign, key: 'payroll' },
  ];

  return (
        <aside className="w-72 h-screen bg-gradient-to-b from-[#0f0f11] to-[#141416] border-r border-white/5 flex flex-col justify-between p-6">

            {/* Logo */}
            <div>
            <div className="mb-10 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                <LayoutDashboard size={20} className="text-white" />
                </div>
                <span className="text-xl font-semibold text-white tracking-wide">
                Bona Media
                </span>
            </div>

            {/* Menu */}
            <nav className="space-y-2">
                {items.map(item => {
                const isActive = activeTab === item.key;

                return (
                    <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative
                    ${
                        isActive
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    >
                    {/* Icon */}
                    <item.icon
                        size={20}
                        className={`transition ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                        }`}
                    />

                    {/* Label */}
                    <span className="text-sm font-medium tracking-wide">
                        {item.label}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                        <div className="absolute right-2 w-1.5 h-6 bg-white rounded-full opacity-80" />
                    )}
                    </button>
                );
                })}
            </nav>
            </div>

            {/* User Profile */}
            <div className="mt-6">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <img
                src="https://i.pravatar.cc/100"
                alt="avatar"
                className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="flex-1">
                <p className="text-sm font-semibold text-white">Hùng Huỳnh</p>
                <p className="text-xs text-gray-400">Nhân viên</p>
                </div>

                <LogOut size={18} className="text-gray-400 hover:text-white transition" />
            </div>
            </div>
        </aside>
    );
}