import mongoose from 'mongoose';

let document = 'TokenDisplayInWallet';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tokenID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Token"
  }
});

let tokenDisplayInWalletModel = mongoose.model(document, schema);
export default tokenDisplayInWalletModel;
