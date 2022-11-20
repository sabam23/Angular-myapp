import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public baseUrl: string = 'https://the-trivia-api.com/api/questions';

  getQuizData(categories: string, limit: string, difficulty: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?categories=${categories}&limit=${limit}&difficulty=${difficulty}`);
  }
}
