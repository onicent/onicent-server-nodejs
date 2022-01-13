import mongoose from 'mongoose';

let document = 'VerifyPhone';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  verificationCode: {
    type: String,
    required: false
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

let verifyPhoneModel = mongoose.model(document, schema);
export default verifyPhoneModel;
