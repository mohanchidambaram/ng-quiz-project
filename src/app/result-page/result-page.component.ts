import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(public quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    if (parseInt(localStorage.getItem('qnProgress')) == 10) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

      this.quizService.getQuestions().subscribe(
        (data: any) => {
          this.quizService.correctAnswerCount = 0;
          this.quizService.qns.forEach((e, i) => {
            if (e.answer == data[i].answer)
              this.quizService.correctAnswerCount++;
            e.correct = data[i].answer;
          });
        }
      );
    }
    else
      this.router.navigate(['/quiz']);

  }

  OnSubmit() {
    // this.quizService.submitScore().subscribe(() => {
    //   this.restart();
    // });
    this.signOut();
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }

  signOut() {
    localStorage.clear();
    clearInterval(this.quizService.timer);
    this.router.navigate(['/register']);
  }

}
