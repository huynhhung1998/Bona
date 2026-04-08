// src/models/AttendanceModel.js
import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  checkIn: Date,
  checkOut: Date,

  workingHours: {
    type: Number, // giờ (vd: 8.5)
    default: 0
  },

  status: {
    type: String,
    enum: [
      'ONTIME',
      'LATE',
      'EARLY_LEAVE',
      'ABSENT',
      'LEAVE_PAID',
      'LEAVE_UNPAID',
      'REMOTE'
    ],
    default: 'ONTIME'
  },

  lateMinutes: { type: Number, default: 0 },
  earlyLeaveMinutes: { type: Number, default: 0 },

  isApproved: { type: Boolean, default: false },
  isExempted: { type: Boolean, default: false },

  isAbnormal: { type: Boolean, default: false }, // log lỗi

  source: {
    type: String,
    enum: ['AUTO', 'IMPORT', 'MANUAL'],
    default: 'AUTO'
  },

  isManualEdit: { type: Boolean, default: false }

}, {
  timestamps: true
});

// mỗi nhân viên chỉ có 1 record / ngày
AttendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;