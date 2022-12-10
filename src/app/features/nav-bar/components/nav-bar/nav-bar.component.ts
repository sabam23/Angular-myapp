import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthorizationService) { }

  ngOnInit(): void {
  }

  isMenuOpen: boolean = false;
  isUserMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  outputFun(toggleMenu: boolean) {
    this.isUserMenuOpen = toggleMenu;
  }

  clickedOutside(): void {
    this.isUserMenuOpen = false;
  }
}
