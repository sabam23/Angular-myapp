import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit{
  ngOnInit(): void {
  }

  @Output() toggleMenu = new EventEmitter<boolean>();

  constructor(public auth: AuthorizationService, private _snackBar: MatSnackBar) {}

  logOut(): void {
    this.auth.isLoggedIn = false;
    this.toggleMenu.emit(false);
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg,'', {duration: 3000, horizontalPosition: 'start'});
  }
}
