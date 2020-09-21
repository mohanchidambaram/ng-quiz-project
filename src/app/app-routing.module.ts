import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/register"},
  {path: "register", component:RegistrationPageComponent},
  {path: "quiz", component:QuizPageComponent},
  {path: "result", component:ResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
