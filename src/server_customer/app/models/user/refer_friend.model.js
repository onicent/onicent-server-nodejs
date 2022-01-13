import mongoose from 'mongoose';

let document = 'ReferFriend';
let schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  referrerUserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

let referFriendModel = mongoose.model(document, schema);
export default referFriendModel;
