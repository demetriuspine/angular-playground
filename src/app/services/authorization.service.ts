import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authorized = false;
  constructor() { }
  authorize(){
    localStorage.setItem("login", "yes");
  }
  logout(){
    localStorage.clear()
  }
  getLoginStatus(){
    return !!localStorage.getItem("login");
  }
}
