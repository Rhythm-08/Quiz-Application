import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  result:any;

  quizList: any[] =
    [{
      "question": "What is the capital of the United States?",
      "answers": ["Washington, D.C.", "New York", "Los Angeles", "Chicago"]
    },
    {
      "question": "What is the capital of Canada?",

      "answers": ["Toronto", "Ottawa", "Montreal", "Vancouver"]
    }, {
      "question": "What is the capital of Mexico?",

      "answers": ["Guadalajara", "Monterrey", "Puebla", "Mexico City",]
    },
    {
      "question": "What is the capital of Brazil?",
      "answers": ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"]


    },
    {
      "question": "What is the capital of Argentina?",
      "answers": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"]
    },
    {
      "question": "What is the capital of Chile?",

      "answers": ["Valparaiso", "Concepcion", "Santiago", "La Serena"]
    },
    {
      "question": "What is the capital of Peru?",
      "answers": ["Lima", "Arequipa", "Cusco", "Trujillo"]

    },
    {
      "question": "What is the capital of Colombia?",

      "answers": ["Medellin", "Cali", "Barranquilla", "Bogota",]
    },
    {
      "question": "What is the capital of Venezuela?",

      "answers": ["Maracaibo", "Valencia", "Caracas", "Barquisimeto"]
    },
    {
      "question": "What is the capital of Ecuador?",

      "answers": ["Guayaquil", "Quito", "Cuenca", "Machala"]
    }

    ]
    answerArray:any[]=[
      "Washington, D.C.",
      "Ottawa",
      "Mexico City",
      "Brasilia",
      "Buenos Aires",
      "Santiago",
      "Lima",
      "Bogota",
      "Caracas",
      "Quito"
    ];

    putResults(result:any){
      this.result=result;
    }

    getResults(){
      return this.result;
    }

}
