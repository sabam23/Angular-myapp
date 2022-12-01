import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public isLoggedIn: boolean = false;
  private baseUrl = 'http://localhost:3000/';
  public loggedId: number = 0;

  username = new BehaviorSubject<string>('');
  currentUsername = this.username.asObservable();

  changeName(username: string) {
    this.username.next(username);
  }

  addStudent(payload: User) {
    return this.http.post(this.baseUrl + 'users', payload);
  }

  getStudentData(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/${id}`);
  }

  updateData(id: number, payload: User) {
    return this.http.put(`${this.baseUrl}users/${id}`, payload);
  }

  getFullData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }
}