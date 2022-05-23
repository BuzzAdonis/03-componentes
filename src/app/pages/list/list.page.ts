import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  suarios:Observable<any>;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.suarios=this.dataService.getUsuarios();
  }

}
