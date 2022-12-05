import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizResultComponent implements OnInit {

  @Input() correctCount!: number;
  @Input() questionCount!: number;

  constructor(private router: Router, public location: Location) { }

  ngOnInit(): void {
  }

  reLoad(): void {
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["quiz"]);
      });
  }
}
