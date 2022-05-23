import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data:any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteSocroll:IonInfiniteScroll;
  constructor() { }

  ngOnInit() {
  }
  loadData(){
    //console.log(event);
    
    if(this.data.length > 50){
      this.infiniteSocroll.complete();
      this.infiniteSocroll.disabled=true;
      return
    }

    setTimeout(()=>{
      const nuevoArreglo = Array(20);
      this.data.push(...nuevoArreglo);
      //event.target.complete();
      this.infiniteSocroll.complete();
    },1500)
  }
}
