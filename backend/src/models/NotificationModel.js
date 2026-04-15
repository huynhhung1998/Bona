// src/models/NotificationModel.js
import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  title: {
    type: String,
    required: true,
    trim: true
  },

  body: {
    type: String,
    trim: true
  },

  isRead: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true // có createdAt, updatedAt (table chỉ cần createdAt nhưng không sao)
});

// query nhanh theo user + trạng thái
NotificationSchema.index({ userId: 1, isRead: 1 });

const Notification = mongoose.model('Notification', NotificationSchema);

export default Notification;