import mongoose from 'mongoose';

let document = 'WithdrawMoneyToTheBank';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  bank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bank"
  },
  id: {
    type: String,
    unique: true
  },
  bankAccountNumber: {
    type: Number
  },
  bankAccountHolderName: {
    type: String
  },
  amount: {
    type: Number
  },
  content: {
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

let withdrawMoneyToTheBankModel = mongoose.model(document, schema);
export default withdrawMoneyToTheBankModel;
