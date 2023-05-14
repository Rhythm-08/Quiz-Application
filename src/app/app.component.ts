import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quiz-Application';
  isQuizActive:boolean = false;
  isQuestionActive:boolean = false;
  isResultActive:boolean = false;

  clickResult(){
    this.isResultActive = true;
    this.isQuestionActive=false;
    this.isQuizActive = false;


  }
clickQuiz(){
  this.isQuizActive = true;
  this.isQuestionActive=false;
  this.isResultActive = false;

}
clickQuestion(){
  this.isQuestionActive = true;
  this.isQuizActive = false;
  this.isResultActive = false;
  }
  
  clickedNavbar(){
    this.isQuizActive = true;
    this.isQuestionActive=false;
    this.isResultActive = false;
  }

}

