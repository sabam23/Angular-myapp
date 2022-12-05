import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { Idata } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http: HttpClient, public auth: AuthorizationService) { }

  public baseUrl: string = 'http://localhost:3000/';

  addData(payload: Idata) {
    return this.http.post(this.baseUrl + 'quizdata', payload);
  }

  getUserData(): Observable<Idata[]> {
    return this.http.get<Idata[]>(`${this.baseUrl}quizdata?userId=${this.auth.loggedId}`);
  }
}
