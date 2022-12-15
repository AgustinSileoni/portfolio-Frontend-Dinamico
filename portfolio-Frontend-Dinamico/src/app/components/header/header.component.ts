import { Component } from '@angular/core';
import { Boton } from 'src/app/Boton';
import { BOTONES } from 'src/app/mock-boton';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  botones:Boton[]=BOTONES;

}
