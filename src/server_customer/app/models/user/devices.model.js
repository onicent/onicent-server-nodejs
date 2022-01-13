import mongoose from 'mongoose';

let document = 'Devices';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  Key: {
    type: String,
    required: true
  },
  Description: {
    type: String
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

let devicesModel = mongoose.model(document, schema);
export default devicesModel;
