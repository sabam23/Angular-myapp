import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(public auth: AuthorizationService) {}

  logOut(): void {
    this.auth.isLoggedIn = false;
  }
}
