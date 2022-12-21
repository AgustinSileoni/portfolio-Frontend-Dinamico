import { Component, Input  } from '@angular/core';
import { Card } from 'src/app/Card';
import { CARDS } from 'src/app/mock-cards';
import { PROYECTOS } from 'src/app/mock-proyectos';
import { HERRAMIENTAS } from 'src/app/mock-herramientas';

@Component({
  selector: 'app-cards-group',
  templateUrl: './cards-group.component.html',
  styleUrls: ['./cards-group.component.scss']
})
export class CardsGroupComponent {

    @Input() file:Card[]=[]

}
