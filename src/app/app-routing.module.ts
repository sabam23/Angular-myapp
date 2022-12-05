import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { AuthorizationComponent } from './features/authorization/components/authorization.component';
import { HomeComponent } from './features/homePage/components/home/home.component';
import { UserDataComponent } from './features/quiz/components/user-data/user-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'quiz/userdata',
    component: UserDataComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'auth',
    component: AuthorizationComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
