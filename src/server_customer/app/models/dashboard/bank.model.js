import mongoose from 'mongoose';

let document = 'Bank';
let schema = new mongoose.Schema({
  bankName: {
    type: String
  },
  shortName: {
    type: String
  },
  swiftCode: {
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

let bankModel = mongoose.model(document, schema);
export default bankModel;
