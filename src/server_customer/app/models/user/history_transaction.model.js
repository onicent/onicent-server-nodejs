import mongoose from 'mongoose';

let document = 'KYC';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tokenID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Token"
  },
  codeTransaction: {
    type: String,
    required: true
  },
  type: {
    type: Number
  },
  icon: {
    type: String
  },
  title: {
    type: String
  },
  sendFrom: {
    type: String
  },
  sendTo: {
    type: String
  },
  ammount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: Number,
    required: true
  },
  exchangeWith: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
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

let kycModel = mongoose.model(document, schema);
export default kycModel;
