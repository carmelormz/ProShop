import mongoose from 'mongoose';

const userModel = {
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: [true, 'A user must have a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
};

const options = {
  timestamps: true,
};

const userSchema = mongoose.Schema(userModel, options);

const User = mongoose.model('User', userSchema);

export default User;
