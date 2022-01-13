import mongoose from 'mongoose';

let document = 'VerifyResetPassword';
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

let verifyResetPasswordModel = mongoose.model(document, schema);
export default verifyResetPasswordModel;
