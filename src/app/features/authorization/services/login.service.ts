import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/';

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