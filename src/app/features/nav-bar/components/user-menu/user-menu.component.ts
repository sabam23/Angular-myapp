import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit{
  ngOnInit(): void {
  }

  @Output() toggleMunu = new EventEmitter<boolean>();

  constructor(public auth: AuthorizationService) {}

  logOut(): void {
    this.auth.isLoggedIn = false;
    this.toggleMunu.emit(false);
  }

}
