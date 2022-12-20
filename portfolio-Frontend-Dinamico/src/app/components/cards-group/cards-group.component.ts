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
    @Input() file:string="";
    array_Cards:Card[]=CARDS;
    archivo:string="";
 


    constructor(){
      this.comprobacion(this.file)
    }

    AfterContentInit(){
      this.comprobacion(this.file)
    }


    comprobacion(archivo:string){
      if((archivo)==="INICIO") {
        this.array_Cards=CARDS;
      }
      if((archivo)==="PROYECTOS"){
        this.array_Cards=PROYECTOS;
      }
      console.log(archivo)
    }

    actualizar(file:string){
      this.archivo= file;
      this.comprobacion(this.archivo)
      this.card1=this.array_Cards[0];
      this.card2=this.array_Cards[1];
      this.card3=this.array_Cards[2];
    }

    card1:Card=this.array_Cards[0];
    card2:Card=this.array_Cards[1];
    card3:Card=this.array_Cards[2];
}
