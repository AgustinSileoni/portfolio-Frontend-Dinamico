import { Component,Input } from '@angular/core';
import { Card } from 'src/app/Card';
import { CARDS } from 'src/app/mock-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() card:Card={id:0,text:"",link:"",image:""};  

}
