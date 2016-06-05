'use strict';

import mongoose from 'mongoose';

var SendmailSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  attend: Boolean
});

export default mongoose.model('Sendmail', SendmailSchema);
