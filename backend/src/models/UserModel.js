// src/models/UserModel.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    unique: true, // 1 employee = 1 account
    sparse: true  // cho phép null (nếu có user không gắn employee)
  },

  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  passwordHash: {
    type: String,
    required: true
  },

  isActive: {
    type: Boolean,
    default: true
  },

  lastLogin: Date

}, { timestamps: true });

// index phục vụ login nhanh
UserSchema.index({ username: 1 });

const User = mongoose.model('User', UserSchema);

export default User;