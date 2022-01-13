import mongoose from 'mongoose';
import crypto from 'crypto';

let document = 'User';
let schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: false,
    unique: true,
    lowercase: true
  },
  phoneNumber: {
    type: Number,
    required: false,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  countryCode: {
    type: String
  },
  transactionAllowed: {
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

schema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await crypto.createHash('sha256').update(this.password).digest('base64');



    return next();
  } catch (err) {
    return next(err);
  }
});

let userModel = mongoose.model(document, schema);
export default userModel;
