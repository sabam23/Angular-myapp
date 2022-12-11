import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/nav-bar/components/nav-bar/nav-bar.component';
import { DashboardComponent } from './features/dashboard/Components/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './features/quiz/components/quiz/quiz.component';
import { QuizResultComponent } from './features/quiz/components/quiz-result/quiz-result.component';
import { AuthorizationComponent } from './features/authorization/components/authorization.component';
import { HomeComponent } from './features/homePage/components/home/home.component';
import { UserDataComponent } from './features/quiz/components/user-data/user-data.component';
import { CategoryFormatPipe } from './features/quiz/pipes/category-format.pipe';
import { UserMenuComponent } from './features/nav-bar/components/user-menu/user-menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClickOutsideDirective } from './core/directives/click-outside.directive';
import { FeedbackModalComponent } from './features/feedback-modal/feedback-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    QuizComponent,
    QuizResultComponent,
    AuthorizationComponent,
    HomeComponent,
    UserDataComponent,
    CategoryFormatPipe,
    UserMenuComponent,
    ClickOutsideDirective,
    FeedbackModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
