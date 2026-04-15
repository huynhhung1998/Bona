// src/models/ShiftModel.js
import mongoose from 'mongoose';

const ShiftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  startTime: {
    type: String, // "08:00"
    required: true,
    match: /^([01]\d|2[0-3]):([0-5]\d)$/
  },

  endTime: {
    type: String, // "17:30"
    required: true,
    match: /^([01]\d|2[0-3]):([0-5]\d)$/
  },

  graceLateMinutes: {
    type: Number,
    default: 0,
    min: 0
  }

}, { timestamps: true });

// tránh trùng ca làm
ShiftSchema.index({ name: 1 }, { unique: true });

const Shift = mongoose.model('Shift', ShiftSchema);

export default Shift;