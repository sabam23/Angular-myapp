import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { DashboardComponent } from './features/dashboard/Components/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './features/quiz/components/quiz/quiz.component';
import { QuizResultComponent } from './features/quiz/components/quiz-result/quiz-result.component';
import { AuthorizationComponent } from './features/authorization/components/authorization.component';
import { HomeComponent } from './features/homePage/components/home/home.component';
import { UserDataComponent } from './features/quiz/components/user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    QuizComponent,
    QuizResultComponent,
    AuthorizationComponent,
    HomeComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
