import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, tap, throttle, throttleTime } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { QuizService } from '../Services/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  questions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>(
    [] as Question[]
  );

  toggleQuiz: boolean = false;
  sliderValue!: number;

  ngOnInit(): void {
  }

  quizForm: FormGroup = new FormGroup({
    "category": new FormControl('', Validators.required),
    "difficulty": new FormControl('', Validators.required),
    "limit": new FormControl(10)
    }
  )

  getData(sliderValue: string) {
    this.quizService.getQuizData(
      this.quizForm.get("category")?.value,
      sliderValue,
      this.quizForm.get("difficulty")?.value
    ).pipe(
      tap((response) => this.questions.next(response)))
      .subscribe(d => this.sliderValue = Number(sliderValue));
      this.toggleQuiz = true;
  }
}
