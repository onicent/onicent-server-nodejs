import mongoose from 'mongoose';

let document = 'Level';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  countVNDTTransaction: {
    type: Number,
    required: true
  },
  countOICTransaction: {
    type: Number,
    required: true
  },
  level: {
    type: Number
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

let levelModel = mongoose.model(document, schema);
export default levelModel;
