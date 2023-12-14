import { Document } from 'mongoose';

interface User extends Document {
  userName: string;
  email: string;
  password: string;
  image: object;
  phone?: string;
  address?: string;
  confirmEmail: boolean;
  gender?: 'Male' | 'Female';
  status: 'Active' | 'Inactive';
  role: 'User' | 'Admin';
  sendCode?: string | null;
  changePasswordTime?: Date;
}

export default User;
