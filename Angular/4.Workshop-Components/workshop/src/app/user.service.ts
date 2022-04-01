import { Injectable } from '@angular/core';

@Injectable()

export class UserService {
  constructor() { }

  isLogged = false;

  login(): void {
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }
}
