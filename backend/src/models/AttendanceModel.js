// src/models/AttendanceModel.js
import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },

  shiftId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shift'
  },

  date: {
    type: Date,
    required: true
  },

  checkIn: Date,
  checkOut: Date,

  workingHours: {
    type: Number,
    min: 0
  },

  status: {
    type: String,
    enum: ['PRESENT', 'ABSENT', 'LATE', 'EARLY_LEAVE', 'REMOTE', 'LEAVE'],
    default: 'PRESENT'
  },

  isApproved: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
});

// unique 1 ngày / 1 nhân viên
AttendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

// auto tính giờ làm
AttendanceSchema.pre('save', function () {
  if (this.checkIn && this.checkOut) {
    const diffMs = this.checkOut - this.checkIn;
    this.workingHours = diffMs / (1000 * 60 * 60);
  }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;