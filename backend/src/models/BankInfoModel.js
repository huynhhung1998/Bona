import mongoose from 'mongoose';

const BankInfoSchema = new mongoose.Schema({

    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    bankId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
        required: true
    },
    bankAccount: String
    

}, {
    timestamps: true
});

BankInfoSchema.index({ employeeId: 1, bankId: 1 }, { unique: true });

const BankInfo = mongoose.model ('BankInfo', BankInfoSchema);
export default BankInfo;