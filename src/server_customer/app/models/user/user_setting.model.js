import mongoose from 'mongoose';

let document = 'UserSetting';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  language: {
    type: String,
    required: false
  },
  theme: {
    type: Number,
    required: false
  },
  notification: {
    type: Number,
    required: false
  },
  smartOTP: {
    type: Number,
    required: false
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

let userSettingModel = mongoose.model(document, schema);
export default userSettingModel;
