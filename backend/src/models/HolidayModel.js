// src/models/HolidayModel.js
import mongoose from 'mongoose';

const HolidaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  type: {
    type: String,
    enum: ['PUBLIC', 'COMPANY'],
    required: true
  },

  isPaid: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

// tránh trùng ngày + loại holiday
HolidaySchema.index({ date: 1, type: 1 }, { unique: true });

const Holiday = mongoose.model('Holiday', HolidaySchema);

export default Holiday;