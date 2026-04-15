// src/models/DepartmentModel.js
import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  code: {
    type: String,
    unique: true,
    trim: true
  },

  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }

}, { timestamps: true });

const Department = mongoose.model('Department', DepartmentSchema);

export default Department;