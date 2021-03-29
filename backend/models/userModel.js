import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
