import { Component } from '@angular/core';
import { Card } from 'src/app/Card';
import { PROYECTOS } from 'src/app/mock-proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
    title:string="Proyectos";
    file:Card[]=PROYECTOS;

}
