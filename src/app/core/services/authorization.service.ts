import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public isLoggedIn: boolean = false;
  public loggedId: number = 0;

  username = new BehaviorSubject<string>('');
  currentUsername = this.username.asObservable();

  changeName(username: string) {
    this.username.next(username);
  }

  constructor() { }
}
