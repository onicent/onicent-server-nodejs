import mongoose from 'mongoose';

let document = 'DepositSupportBank';
let schema = new mongoose.Schema({
  bankID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bank"
  },
  bankAccountNumber: {
    type: String
  },
  bankAccountHolderName: {
    type: String
  },
  bankBranch: {
    type: String
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

let depositSupportBankModel = mongoose.model(document, schema);
export default depositSupportBankModel;
