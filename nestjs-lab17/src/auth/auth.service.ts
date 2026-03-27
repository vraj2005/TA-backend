import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private users: Array<{ id: number; email: string; password: string }> = [];

  async register(data: { email: string; password: string }) {
    const hashed = await bcrypt.hash(data.password, 10);
    const user = {
      id: Date.now(),
      email: data.email,
      password: hashed,
    };
    this.users.push(user);
    return 'User Registered';
  }

  async login(data: { email: string; password: string }) {
    const user = this.users.find((u) => u.email === data.email);
    if (!user) return 'User not found';
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) return 'Invalid Password';
    return 'Login Successful';
  }

  async forgotPassword(email: string) {
    const user = this.users.find((u) => u.email === email);
    if (!user) return 'User not found';
    const newPassword = '123456';
    user.password = await bcrypt.hash(newPassword, 10);
    return 'New Password is 123456';
  }
}
