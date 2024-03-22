import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // username:String,
  // email:String,
  // isActive:Boolean
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    // required:[true,"password is required"]
    required: true,
  },
});

export const User = mongoose.model('User', userSchema);

// small letter plural database me
// users.
