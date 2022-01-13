import mongoose from 'mongoose';

let document = 'BankLink';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  bankID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  bankAccountNumber: {
    type: String,
    required: true
  },
  bankAccountHolderName: {
    type: String,
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

let bankLinkModel = mongoose.model(document, schema);
export default bankLinkModel;
