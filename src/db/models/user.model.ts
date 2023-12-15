import mongoose, { Schema, model } from 'mongoose';
import User from '../../types/User.type.js';
const userSchema = new Schema<User>(
  {
    userName: {
      type: String,
      required: true,
      min: 5,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
    },
    status: {
      type: String,
      default: 'Active',
      enum: ['Active', 'Inactive'],
    },
    role: {
      type: String,
      default: 'User',
      enum: ['User', 'Admin'],
    },
    sendCode: {
      type: String,
      default: null,
    },
    changePasswordTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<User>('User', userSchema);
export default userModel;
