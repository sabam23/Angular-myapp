import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  @Input() correctCount!: number;
  @Input() questionCount!: number;

  constructor() { }

  ngOnInit(): void {
  }

  reLoad(): void {
    window.location.reload();
  }
}
