import mongoose from 'mongoose';

let document = 'RechargeFromTheBank';
let schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  depositSupportBankID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DepositSupportBank"
  },
  bankBranch: {
    type: String,
    required: true
  },
  bankAccountNumber: {
    type: Number,
    required: true
  },
  bankAccountHolderName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

let RechargeFromTheBankModel = mongoose.model(document, schema);
export default RechargeFromTheBankModel;
