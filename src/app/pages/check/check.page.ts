import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data=[
    {
      name:'primary',
      seleted:false
    },
    {
      name:'secondary',
      seleted:true
    },
    {
      name:'tertiary',
      seleted:false
    },
    {
      name:'success',
      seleted:true
    },
    {
      name:'danger',
      seleted:false
    },
    {
      name:'light',
      seleted:true
    },
    {
      name:'dark',
      seleted:false
    },
    {
      name:'warning',
      seleted:true
    }
];

  constructor() { }

  ngOnInit() {
  }
  onClick(item:any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }
}
