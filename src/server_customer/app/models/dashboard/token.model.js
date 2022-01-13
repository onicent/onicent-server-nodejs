import mongoose from 'mongoose';

let document = 'Token';
let schema = new mongoose.Schema({
  icon: {
    type: String
  },
  nameCrypto: {
    type: String
  },
  symbol: {
    type: String
  },
  type: {
    type: String
  },
  data: {
    type: String
  },
  introduction: {
    type: String
  },
  website: {
    type: String
  },
  chat: {
    type: String
  },
  social: {
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

let tokenModel = mongoose.model(document, schema);
export default tokenModel;
