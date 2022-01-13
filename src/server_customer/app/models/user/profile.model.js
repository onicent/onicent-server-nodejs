import mongoose from 'mongoose';

let document = 'Profile';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  image: {
    type: String
  },
  fullName: {
    type: String
  },
  dayOfBirth: {
    type: String
  },
  gender: {
    type: Number
  },
  address: {
    type: String
  },
  country: {
    type: String
  },
  facebook: {
    type: String
  },
  zalo: {
    type: String
  },
  telegram: {
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

let profileModel = mongoose.model(document, schema);
export default profileModel;
