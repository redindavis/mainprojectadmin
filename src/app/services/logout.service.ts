import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }
  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    
  }
}
