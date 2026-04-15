import mongoose from 'mongoose';

const BankSchema = new mongoose.Schema({

    code: {type: String, required: true, trim: true},
    name: {type: String, required: true},
    shortName: {type: String, required: true, trim: true},
    logo: {type: String, required: true, trim: true},

},{
    timestamps: true
});

const Bank = mongoose.model ('Bank', BankSchema);
export default Bank;