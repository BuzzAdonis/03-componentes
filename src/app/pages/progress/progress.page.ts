import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  procentaje:number=0.05;
  constructor() { }

  ngOnInit() {
  }
  rangeChange(event:any){
    //console.log(event.detail.value);
    this.procentaje = event.detail.value/100;
    console.log(this.procentaje);
  }
}
