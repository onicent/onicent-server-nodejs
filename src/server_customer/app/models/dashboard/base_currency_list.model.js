import mongoose from 'mongoose';

let document = 'BaseCurrency';
let schema = new mongoose.Schema({
  TokenID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Token"
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

let baseCurrencyModel = mongoose.model(document, schema);
export default baseCurrencyModel;
