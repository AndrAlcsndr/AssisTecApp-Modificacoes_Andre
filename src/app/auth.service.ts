import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User) {

    localStorage.setItem('ACESS_TOKEN', "access_token");

  }


  public isLoggedIn()
  {
    return localStorage.getItem('ACESS_TOKEN') !== null;
  }


  public logout()
  {
    localStorage.removeItem('ACESS_TOKEN');
  }

}
