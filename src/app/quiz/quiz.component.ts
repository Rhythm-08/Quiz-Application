import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit{
  Toast:any
  submitted=false;
  constructor(private quizService:QuizService,private router:Router){
    this.Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  }
  getValue(event:any){
    // console.log(event)
    // this.submitted=event;

  }
quizArray:any[]=[];
originalAnswers:any;
solutionArray:any[]=[];
  ngOnInit(): void {
    this.quizArray=this.quizService.quizList;
    // console.log(this.quizArray)
    this.originalAnswers=this.quizService.answerArray;
  }
  answers(value:any,i:any){
    this.solutionArray[i]=value;
  }
  results(array:any){
    let count=0;
    // console.log('Helo')
    this.originalAnswers.forEach((element:any,index:any) => {
      if(element==array[index]){
        count++;
      }});
      // console.log(count)
      this.quizService.putResults(count);
this.router.navigate(['/result'])
}
isSumbitted(){
  this.submitted=true;
  // console.log(this.submitted)
  if(this.solutionArray.length==10 && this.submitted){
    setTimeout(() => {
      this.Toast.fire({
        icon: 'success',
        title: 'Quiz Completed Successfully'
      })
      this.results(this.solutionArray);
    }, 1000)

    }
    else{
      this.Toast.fire({
        icon: 'error',
        title: 'Please answer all the questions'
      })
    }

}
}
