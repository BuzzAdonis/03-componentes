import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  @ViewChild(IonReorderGroup) ionReorderGroup: IonReorderGroup;
  personajes:string[]=['Batman','Superman','Spider-Man','Green Later','Green Arrow','Flash','Aquaman']
  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any){
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to,0,itemMover);
    event.detail.complete();
    console.log(this.personajes);
  }

  onClick(){
  this.ionReorderGroup.disabled = !this.ionReorderGroup.disabled;
  }
}
