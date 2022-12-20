import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent {
  
  @Input() title:string="sin nombre";
  @Input() texto:string="";
}
