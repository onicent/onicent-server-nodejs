import mongoose from 'mongoose';

let document = 'SystemSetting';
let schema = new mongoose.Schema({
  videoTutorialLink: {
    type: String,
    required: true
  },
  hotline: {
    type: String,
  },
  email: {
    type: String,
  },
  telegram: {
    type: String,
  },
  youtube: {
    type: String,
  },
  facebook: {
    type: String,
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

let systemSettingModel = mongoose.model(document, schema);
export default systemSettingModel;
