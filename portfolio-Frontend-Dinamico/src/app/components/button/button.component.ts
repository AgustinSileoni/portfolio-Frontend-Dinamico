import { Component,Input } from '@angular/core';
import { Boton } from 'src/app/Boton';
import { BOTONES } from 'src/app/mock-boton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() boton:Boton={id:0,text:"",link:""}
  link:string=this.boton.link;

  //Estudia si es una url o un path interno, version basica
  url():boolean{
    return /^http(?:s)?:\/{2}\S+$/.test(this.boton.link);
  }
}
