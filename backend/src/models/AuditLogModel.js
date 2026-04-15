// src/models/AuditLogModel.js
import mongoose from 'mongoose';

const AuditLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  action: {
    type: String,
    enum: ['CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'APPROVE', 'REJECT'],
    required: true
  },

  targetModel: {
    type: String,
    required: true,
    trim: true
  },

  targetId: {
    type: mongoose.Schema.Types.ObjectId
  },

  // lưu dữ liệu thay đổi (rất quan trọng)
  metadata: {
    type: mongoose.Schema.Types.Mixed
  },

  // IP user
  ipAddress: String,

  // user agent (trình duyệt)
  userAgent: String

}, {
  timestamps: { createdAt: true, updatedAt: false }
});

// indexes
AuditLogSchema.index({ userId: 1, createdAt: -1 });
AuditLogSchema.index({ targetModel: 1, targetId: 1 });
AuditLogSchema.index({ action: 1 });

const AuditLog = mongoose.model('AuditLog', AuditLogSchema);

export default AuditLog;