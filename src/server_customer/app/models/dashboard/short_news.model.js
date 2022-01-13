import mongoose from 'mongoose';

let document = 'ShortNews';
let schema = new mongoose.Schema({
  image: {
    type: String
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  likeuser: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  view: {
    type: Number,
    default: 0
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

let shortNewsModel = mongoose.model(document, schema);
export default shortNewsModel;
