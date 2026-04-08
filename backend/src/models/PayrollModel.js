// src/models/PayrollModel.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: String,       // tên khoản (VD: xăng xe, chuyên cần...)
  amount: Number,     // số tiền
  note: String        // ghi chú
}, { _id: false });

const PayrollSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },

  month: {
    type: String, // "2026-03"
    required: true
  },

  baseSalary: {
    type: Number,
    required: true
  },

  allowances: [ItemSchema], // phụ cấp
  bonuses: [ItemSchema],    // thưởng
  deductions: [ItemSchema], // khấu trừ

  totalAllowance: { type: Number, default: 0 },
  totalBonus: { type: Number, default: 0 },
  totalDeduction: { type: Number, default: 0 },

  netSalary: { type: Number }, // thực nhận

  status: {
    type: String,
    enum: ['PENDING', 'APPROVED', 'PAID'],
    default: 'PENDING'
  },

  note: String // ghi chú chung

}, {
  timestamps: true
});

// mỗi tháng 1 record / nhân viên
PayrollSchema.index({ employeeId: 1, month: 1 }, { unique: true });

const Payroll = mongoose.model('Payroll', PayrollSchema);

export default Payroll;