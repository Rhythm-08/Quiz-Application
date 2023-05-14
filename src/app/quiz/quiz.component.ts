import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
  constructor(private quizService:QuizService){}
quizArray:any[]=[];


  ngOnInit(): void {
    this.quizArray=this.quizService.quizList;
    console.log(this.quizArray)
  }

}
