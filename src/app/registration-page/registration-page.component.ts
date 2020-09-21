import { Component, OnInit } from '@angular/core';
import { QuizService } from "../service/quiz.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private quizService:QuizService,private route : Router) { }

  content: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void {
    this.quizService.loadContent().subscribe(
      response => {
        this.content = response;
      }
    );
  }

  OnSubmit(name:string,email:string){
    this.quizService.insertParticipant(name,email).subscribe(
      (data : any) =>{
        localStorage.clear();
        localStorage.setItem('participant',JSON.stringify(data));
        this.route.navigate(['/quiz']);
      }
    );
  }

}
