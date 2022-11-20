import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../interfaces/question.interface';
import { QuizService } from '../Services/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  questions: Question[] = [];

  ngOnInit(): void {
  }

  quizForm: FormGroup = new FormGroup({
    "category": new FormControl('', Validators.required),
    "difficulty": new FormControl('', Validators.required),
    "limit": new FormControl(10)
    }
  )

  count: number = 0;

  getData(sliderValue: string) {
    this.quizService.getQuizData(
      this.quizForm.get("category")?.value,
      sliderValue,
      this.quizForm.get("difficulty")?.value
    ).subscribe((data) => this.questions = data)
  }
}
