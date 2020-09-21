import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { HttpClientModule } from "@angular/common/http";
import { QuizModule } from "./modules/quiz/quiz.module";
import { ResultPageComponent } from './result-page/result-page.component';

import { QuizService } from './service/quiz.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    QuizPageComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuizModule,
    FormsModule,
  ],
  providers: [QuizService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
