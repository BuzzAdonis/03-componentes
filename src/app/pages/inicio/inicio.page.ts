import { Component, OnInit } from '@angular/core';

interface Componente{
icon:string;
name:string;
redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[]=[
    {
      icon:'american-football',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'person-circle-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name:'Buttons',
      redirectTo:'/button'
    },
    
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkmark-circle-outline',
      name:'Checks',
      redirectTo:'/check'
    },
    {
      icon:'calendar-outline',
      name:'Date Time',
      redirectTo:'/date-time'
    },
    {
      icon:'car-outline',
      name:'Fabs',
      redirectTo:'/fab'
    },
    {
      icon:'grid-outline',
      name:'Grids',
      redirectTo:'/grid'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
