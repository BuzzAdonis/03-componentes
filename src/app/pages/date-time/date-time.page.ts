import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci:Date = new Date();
  constructor() { }

  ngOnInit() {
  }
  cambioDeFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }
  customYearValue=[2030,2020,2010,2000]
  customPikerOption ={
    button:[
      {
        text:'Hola',
        handler:(event) => {
          console.log(event);
        }
      },
      {
        text:'Mundo',
        handler:()=>{
          console.log('log!');
        }
      }
    ]
  }
}
