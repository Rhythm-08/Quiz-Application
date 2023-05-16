import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{
  quizResult:any[]=[];
 constructor(private quizSerivce:QuizService) {

 }
 ngOnInit(): void {
  if(this.quizSerivce.getResults()){
    this.quizResult.push(this.quizSerivce.getResults())
  }
    // console.log(this.quizResult)

 }

  }


