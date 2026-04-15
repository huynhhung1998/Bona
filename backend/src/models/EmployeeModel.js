// src/models/EmployeeModel.js
import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  employeeCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  fullName: {
    type: String,
    required: true,
    trim: true
  },

  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },

  positionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Position'
  },

  team: {
    type: String,
    trim: true
  },

  block: {
    type: String,
    trim: true
  },

  hireDate: {
    type: Date,
    required: true
  },

  gender: {
    type: String,
    enum: ['MALE', 'FEMALE', 'OTHER']
  },

  birthYear: {
    type: Number
  },

  idNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  phone: {
    type: String,
    trim: true
  },

  personalEmail: {
    type: String,
    trim: true
  },

  workEmail: {
    type: String,
    trim: true
  },

  photo: {
    type: String,
    trim: true
  }

}, { timestamps: true });

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;