import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

   //---------------- Properties---------------
   readonly rootUrl = 'http://localhost:8080';
   qns: any[];
   seconds: number;
   timer;
   qnProgress: number;
   correctAnswerCount: number = 0;
 
   //---------------- Helper Methods---------------
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }


  //---------------- Http Methods---------------

  insertParticipant(name: string, email: string) {
    var body = {
      participantName: name,
      participantMail: email
    }
    return this.http.post(this.rootUrl + '/insertParticipant', body).pipe();
  }

  getQuestions() {
    return this.http.get(this.rootUrl + '/getAll');
  }

  getAnswers() {
    var body = this.qns.map(x => x.questionId);
    return this.http.post(this.rootUrl + '/api/Answers', body);
  }

  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }


  loadContent(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/getAll").pipe();
  }
}
