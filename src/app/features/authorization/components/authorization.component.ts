import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../validators/password.validator';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/user.interface';
import { LoginForm } from '../interfaces/loginForm.inreface';
import { UserForm } from '../interfaces/userForm.interface';

@Component({
  selector: 'app-login',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AuthorizationComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.getFullData();
  }

  addStudent(): void {
    if (this.registerForm.valid) {
      this.loginService.addStudent(this.registerForm.value as User).subscribe();
      window.alert('Student Registered!');
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
          this.loginService.isLoggedIn = true;
          this.loginService.loggedId = user.id;
          this.loginService.changeName(`${user.firstname} ${user.lastname}`);
          this.router.navigateByUrl('/forum').then();
          this.registerForm.reset();
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
        Validators.pattern('^[a-zA-Z-]*$')
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
}