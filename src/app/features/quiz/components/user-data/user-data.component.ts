import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Idata } from '../../interfaces/data.interface';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit{

  constructor(public quizData: UserDataService) {}

  userData: BehaviorSubject<Idata[]> = new BehaviorSubject<Idata[]>([] as Idata[]);
  dataArray!: Idata[];

  ngOnInit(): void {
    this.quizData.getUserData().pipe(
      tap((response) => this.userData.next(response))
      ).subscribe(
        (data) => {
          this.dataArray = data;
        }
      );
  }
}
