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
  
}
