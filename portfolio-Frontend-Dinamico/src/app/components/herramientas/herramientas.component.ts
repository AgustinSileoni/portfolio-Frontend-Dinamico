import { Component } from '@angular/core';
import { Card } from 'src/app/Card';
import { HERRAMIENTAS } from 'src/app/mock-herramientas';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss']
})
export class HerramientasComponent {
    title:string="Herramientas";
    seleccion:string="HERRAMIENTAS";
    texto:string="Herramientas utilizadas durante los proyectos"
    herramientas:Card[]=HERRAMIENTAS;

    card:Card=this.herramientas[0];
}
