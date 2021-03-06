import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import{Componente} from '../../interfaces/interfaces';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Observable<Componente[]>;

  constructor(private menuController:MenuController,
              private dataService:DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOption();
  }
  mostrarMenu(){
    this.menuController.open('first')
  }

}
