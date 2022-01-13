import mongoose from 'mongoose';

let document = 'BTCWallet';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tokenID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Token"
  },
  network: {
    type: String,
    required: true
  },
  privateKey: {
    type: String,
    required: true
  },
  publicKey: {
    type: String,
    required: true
  },
  address: {
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

let BTCWalletModel = mongoose.model(document, schema);
export default BTCWalletModel;
