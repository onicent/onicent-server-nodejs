import mongoose from 'mongoose';

let document = 'ADSSell';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tokenID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Token"
  },
  amount: {
    type: Number,
    required: true
  },
  prices: {
    type: Number,
    required: true
  },
  amountMin: {
    type: Number,
    required: true
  },
  amountMax: {
    type: Number,
    required: true
  },
  methodPayment: {
    type: String,
    required: true
  },
  adsType: {
    type: String,
  },
  timeFinish: {
    type: String,
    required: true
  },
  timeClose: {
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

let ADSSellModel = mongoose.model(document, schema);
export default ADSSellModel;
