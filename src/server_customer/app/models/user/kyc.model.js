import mongoose from 'mongoose';

let document = 'KYC';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  frontsideID: {
    type: String,
    required: true
  },
  backsideID: {
    type: String,
    required: true
  },
  scanFace: {
    type: String,
    required: true
  },
  portrait: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  personalID: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  dayOfBirth: {
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

let kycModel = mongoose.model(document, schema);
export default kycModel;
