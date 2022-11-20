import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map, tap, throttleTime } from 'rxjs';
import { Question } from '../dashboard/interfaces/question.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  @Input() questions!: BehaviorSubject<Question[]>;
  
  ngOnInit(): void {
    try {
      this.loadQuestion();
    } catch {
      console.log("No Question!");
    }
  }

  count: number = 0;
  question: string = '';
  answers!: string[];

  loadQuestion() {
    this.questions.pipe(
      map(item => item[this.count])
    ).subscribe(
      (response) => {
        this.question = response?.question;
        this.answers = response?.incorrectAnswers;
        this.answers?.push(response?.correctAnswer);
      }
    );
  }

  nextQuestion(): void {
    this.count++;
    this.loadQuestion();
  }
}
