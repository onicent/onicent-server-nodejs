import mongoose from 'mongoose';

let document = 'Favorite';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  listOftokenID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Token"
    }
  ],
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

let favoriteModel = mongoose.model(document, schema);
export default favoriteModel;
