import mongoose from 'mongoose';

const ContractSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },

  contractType: {
    type: String,
    required: true,
    trim: true
  },

  contractDate: {
    type: Date,
    required: true
  },

  contractEnd: Date,

  probationStart: Date,
  probationEnd: Date,

  resignationDate: Date

}, { timestamps: true });

ContractSchema.index({ employeeId: 1 });

const Contract = mongoose.model('Contract', ContractSchema);

export default Contract;