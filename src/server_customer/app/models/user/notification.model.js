import mongoose from 'mongoose';

let document = 'Notification';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  icon: {
    type: String,
    required: true
  },
  title: {
    type: Number,
    required: true
  },
  conttent: {
    type: String,
    required: true
  },
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

let notificationModel = mongoose.model(document, schema);
export default notificationModel;
