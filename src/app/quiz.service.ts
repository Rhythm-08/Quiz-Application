import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  quizList:any[]=
    [{
      "question1": "What is the capital of the United States?",
      "answer1" : "Washington, D.C.",
      "wrongAnswer1" : "New York",
      "wrongAnswer2" : "Los Angeles",
      "wrongAnswer3" : "Chicago"
    },
    {
      "question2": "What is the capital of Canada?",
      "answer2" : "Ottawa",
      "wrongAnswer1" : "Toronto",
      "wrongAnswer2" : "Montreal",
      "wrongAnswer3" : "Vancouver"
    },{
        "question3": "What is the capital of Mexico?",
        "answer3" : "Mexico City",
        "wrongAnswer1" : "Guadalajara",
        "wrongAnswer2" : "Monterrey",
        "wrongAnswer3" : "Puebla"
    },
    {
      "question4":"What is the capital of Brazil?",
      "answer4" : "Brasilia",
      "wrongAnswer1" : "Rio de Janeiro",
      "wrongAnswer2" : "Sao Paulo",
      "wrongAnswer3" : "Salvador"


    },
    {
      "question5":"What is the capital of Argentina?",
      "answer5" : "Buenos Aires",
      "wrongAnswer1" : "Cordoba",
      "wrongAnswer2" : "Rosario",
      "wrongAnswer3" : "Mendoza"
    },
    {
      "question6":"What is the capital of Chile?",
      "answer6" : "Santiago",
      "wrongAnswer1" : "Valparaiso",
      "wrongAnswer2" : "Concepcion",
      "wrongAnswer3" : "La Serena"
    },
    {
      "question7":"What is the capital of Peru?",
      "answer7" : "Lima",
      "wrongAnswer1" : "Arequipa",
      "wrongAnswer2" : "Cusco",
      "wrongAnswer3" : "Trujillo"

    },
    {
      "question8":"What is the capital of Colombia?",
      "answer8" : "Bogota",
      "wrongAnswer1" : "Medellin",
      "wrongAnswer2" : "Cali",
      "wrongAnswer3" : "Barranquilla"
    },
    {
      "question9":"What is the capital of Venezuela?",
      "answer9" : "Caracas",
      "wrongAnswer1" : "Maracaibo",
      "wrongAnswer2" : "Valencia",
      "wrongAnswer3" : "Barquisimeto"
    },
    {
      "question10":"What is the capital of Ecuador?",
      "answer10" : "Quito",
      "wrongAnswer1" : "Guayaquil",
      "wrongAnswer2" : "Cuenca",
      "wrongAnswer3" : "Machala"
    }

  ]

}
