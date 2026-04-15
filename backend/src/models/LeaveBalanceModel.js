// src/models/LeaveBalanceModel.js
import mongoose from 'mongoose';

const LeaveBalanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  totalDays: {
    type: Number,
    required: true,
    min: 0
  },

  usedDays: {
    type: Number,
    default: 0,
    min: 0
  },

  remainingDays: {
    type: Number,
    min: 0
  }

}, { timestamps: true });

// unique index
LeaveBalanceSchema.index({ employeeId: 1, year: 1 }, { unique: true });

// auto calc
LeaveBalanceSchema.pre('save', function () {
  this.remainingDays = this.totalDays - this.usedDays;
});

const LeaveBalance = mongoose.model('LeaveBalance', LeaveBalanceSchema);

export default LeaveBalance;