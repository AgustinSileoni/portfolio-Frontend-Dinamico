import { Component } from '@angular/core';
import { Card } from 'src/app/Card';
import { CARDS } from 'src/app/mock-cards';

@Component({
  selector: 'app-cards-group',
  templateUrl: './cards-group.component.html',
  styleUrls: ['./cards-group.component.scss']
})
export class CardsGroupComponent {
    cards:Card[]=CARDS;
    card1:Card=this.cards[0];
    card2:Card=this.cards[1];
    card3:Card=this.cards[2];
}
