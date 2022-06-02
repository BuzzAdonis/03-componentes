import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeros:Observable<any>;
  textoBuscar:string='';
  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.superHeros = this.dataService.getHeroes();
  }

  segmentChanged(event:any){
    this.textoBuscar = event.detail.value;
  }
}
