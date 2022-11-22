import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map, tap, throttle, throttleTime } from 'rxjs';
import { Question } from '../../../dashboard/interfaces/question.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  @Input() questions!: BehaviorSubject<Question[]>;
  @Input() questionsLimit!: number;

  ngOnInit(): void {
    try {
      this.loadQuestion();
    } catch {
      console.log("No Question!");
    }
    this.startTimer();
  }

  // count for observable
  count: number = 0;

  question: string = '';
  answers!: string[];
  ca: string = '';

  // correct answers count
  correctCount: number = 0;
  // question count
  questionCount: number = 1;
  toggleResult: boolean = false;


  loadQuestion() {
    this.questions.pipe(
      map(item => item[this.count])
    ).subscribe(
      (response) => {
        this.question = response?.question;
        this.answers = response?.incorrectAnswers;
        this.answers?.push(response?.correctAnswer);
        this.ca = response?.correctAnswer;
      }
    );
    this.answers = this.shuffleArray(this.answers);
  }

// mixing elements in array
 shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
  
      let j = Math.floor(Math.random() * (i + 1));
                  
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
      return array;
}

  finishQuiz(): void {
    if (this.questionCount >= this.questionsLimit) {
      this.toggleResult = true;
      clearInterval(this.interval);
    }
    if (this.QuizAnswers.get("answer")?.value === this.ca) {
      this.correctCount++
    }
  }

  nextQuestion(): void {
    this.questionCount++;
    if (this.QuizAnswers.get("answer")?.value === this.ca) {
      this.correctCount++
    }

    this.QuizAnswers.reset();
    this.count++;
    this.loadQuestion();
    clearInterval(this.interval);
    this.timeLeft = 30;
    this.startTimer();
  }

  timeLeft: number = 30;
  interval: any;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }else if (this.questionCount === this.questionsLimit) {
        this.finishQuiz();
        this.timeLeft = 30;
      }else {
        this.nextQuestion();
        this.timeLeft = 30;
      }
    },1000)
  }
  
  QuizAnswers: FormGroup = new FormGroup({
    "answer": new FormControl('', Validators.required)
  })
}
