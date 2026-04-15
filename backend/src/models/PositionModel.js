// src/models/PositionModel.js
import mongoose from 'mongoose';

const PositionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  level: {
  type: String,
  enum: ['INTERN', 'JUNIOR', 'MIDDLE', 'SENIOR', 'LEAD', 'MANAGER'],
  trim: true
},

  departmentId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Department',
  required: true
}

}, { timestamps: true });

// optional: tránh trùng title trong cùng phòng ban
PositionSchema.index({ title: 1, departmentId: 1 }, { unique: true });
PositionSchema.index({ departmentId: 1 });  
const Position = mongoose.model('Position', PositionSchema);

export default Position;