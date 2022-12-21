import { Component } from '@angular/core';
import { Card } from 'src/app/Card';
import { CARDS } from 'src/app/mock-cards';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent {
  title:string="Agustin Sileoni";
  text:string="Estudiante de ingenieria en computacion con intereses en el desarrollo web";
  file:Card[]=CARDS;


}
