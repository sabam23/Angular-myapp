import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../../core/validators/password.validator';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/user.interface';
import { LoginForm } from '../interfaces/loginForm.inreface';
import { UserForm } from '../interfaces/userForm.interface';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AuthorizationComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private auth: AuthorizationService, private _snackBar: MatSnackBar) {}
 
  ngOnInit(): void {
    this.getFullData();
  }

  addStudent(): void {
    if (this.registerForm.valid) {
      this.loginService.addStudent(this.registerForm.value as User).subscribe();
      this.registerForm.reset();
      this.getFullData();
    }
  }

  usersArray: User[] = [];

  getFullData(): void {
    this.loginService.getFullData().subscribe((data) => {
      this.usersArray = data;
    });
  }

  loggedUser: object = {};

  getStudentData(id: number): void {
    this.loginService.getStudentData(id).subscribe((data) => {
      this.loggedUser = data;
    });
  }

  login(): void {
    for (let user of this.usersArray) {
      if (this.loginForm.get('email')?.value === user.email) {
        if (user.password === this.loginForm.get('password')?.value) {
          this.auth.isLoggedIn = true;
          this.auth.loggedId = user.id;
          this.auth.changeName(user.username);
          this.router.navigateByUrl('/quiz').then();
          this.registerForm.reset();
          this.openSnackBar('Authorization is Succesful');
          break;         
        } else {
          this.loginForm.get('password')?.setErrors({ password: true });
          break;
        }
      } else {
        let emails = [];
        for (let student of this.usersArray) {
          emails.push(student.email);
        }
        if (this.loginForm.get('email')?.value === '') {
          this.loginForm.get('email')?.setErrors({ empty: true });
        } else if (!emails.includes(`${this.loginForm.get('email')?.value}`)) {
          this.loginForm.get('email')?.setErrors({ account: true });
        }
      }
    }
  }

  loginForm = new FormGroup<LoginForm>(<LoginForm>{
    email: new FormControl<string>('', [Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  registerForm = new FormGroup(
    <UserForm>{
      username: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9]*$')
      ]),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]+'),
        Validators.minLength(7),
      ]),
      repeatPassword: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]+'),
        Validators.minLength(7),
        passwordValidator,
      ])
    },
    { validators: passwordValidator }
  );

  //for UI
  loginPage: boolean = true;
  registerPage: boolean = false;

  openSnackBar(msg: string) {
    this._snackBar.open(msg,'', {duration: 3000, horizontalPosition: 'start'});
  }
}
