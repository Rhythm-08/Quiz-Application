import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  quizList:any[]=
    [{
      "question1": "What is the capital of the United States?",
      "answer1" : "Washington, D.C."
    },
    {
      "question2": "What is the capital of Canada?",
      "answer2" : "Ottawa"
    },{
        "question3": "What is the capital of Mexico?",
        "answer3" : "Mexico City"
    },
    {
      "question4":"What is the capital of Brazil?",
      "answer4" : "Brasilia"

    },
    {
      "question5":"What is the capital of Argentina?",
      "answer5" : "Buenos Aires"
    },
    {
      "question6":"What is the capital of Chile?",
      "answer6" : "Santiago"
    },
    {
      "question7":"What is the capital of Peru?",
      "answer7" : "Lima"

    },
    {
      "question8":"What is the capital of Colombia?",
      "answer8" : "Bogota"
    },
    {
      "question9":"What is the capital of Venezuela?",
      "answer9" : "Caracas"
    },
    {
      "question10":"What is the capital of Ecuador?",
      "answer10" : "Quito"
    }

  ]

}
