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

  minutes: Number,

  durationType: {
    type: String,
    enum: ['FULL_DAY', 'HALF_DAY']
  },

  halfDayType: {
    type: String,
    enum: ['MORNING', 'AFTERNOON']
  },

  totalDays: Number,

  leaveType: {
    type: String,
    enum: ['PAID', 'UNPAID']
  },

  reason: String,

  status: {
    type: String,
    enum: ['PENDING', 'APPROVED', 'REJECTED', 'CANCELLED'],
    default: 'PENDING'
  },

  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },

  approvedAt: Date,

  cancelledAt: Date,
  cancelReason: String,

  attendanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendance'
  },

  leaveBalanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LeaveBalance'
  },

  attachments: [String]

}, { timestamps: true });

// indexes
RequestSchema.index({ employeeId: 1, status: 1 });
RequestSchema.index({ employeeId: 1, fromDate: 1 });

const Request = mongoose.model('Request', RequestSchema);

export default Request;