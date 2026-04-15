// src/models/AttendanceLogModel.js
import mongoose from 'mongoose';

const AttendanceLogSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },

  timestamp: {
    type: Date,
    required: true
  },

  source: {
    type: String,
    enum: ['MACHINE', 'IMPORT'],
    default: 'MACHINE'
  }

}, {
  timestamps: true
});

// index để query nhanh theo ngày
AttendanceLogSchema.index({ employeeId: 1, timestamp: 1 });

const AttendanceLog = mongoose.model('AttendanceLog', AttendanceLogSchema);

export default AttendanceLog;