// src/models/RequestModel.js
import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },

  type: {
    type: String,
    enum: ['LATE', 'EARLY_LEAVE', 'REMOTE', 'LEAVE', 'OTHER'],
    required: true
  },

  fromDate: { type: Date, required: true },
  toDate: { type: Date },

  minutes: { type: Number }, // đi trễ / về sớm

  durationType: {
    type: String,
    enum: ['FULL_DAY', 'HALF_DAY']
  },

  leaveType: {
    type: String,
    enum: ['PAID', 'UNPAID']
  },

  reason: { type: String },

  status: {
    type: String,
    enum: ['PENDING', 'APPROVED', 'REJECTED'],
    default: 'PENDING'
  },

  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },

  approvedAt: Date,

  attendanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendance'
  }

}, { timestamps: true });

const Request = mongoose.model('Request', RequestSchema);

export default Request;