import { Injectable } from '@nestjs/common';
@Injectable({})
export class AuthService {
  login() {
    return { msg: 'Hello I am login' };
  }
  signup() {
    return { msg: 'Hello I am signup' };
  }
}
