import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  questionArray:any[]=[]
  questionForm!: FormGroup;
constructor(private QuizService:QuizService,private formBuilder:FormBuilder){}
ngOnInit(): void {
  this.questionArray=this.QuizService.quizList;
  this.questionForm = this.formBuilder.group({
    question: ['', Validators.required],
    option1: ['', Validators.required],
    option2: ['', Validators.required],
    option3: ['', Validators.required],
    option4: ['', Validators.required]
  });
}
submitForm(){
  if (this.questionForm.valid) {
    // Handle form submission
    console.log(this.questionForm.value);
  }
}

}
