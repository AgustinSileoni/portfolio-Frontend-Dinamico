import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { CardComponent } from './components/card/card.component';
import { CardsGroupComponent } from './components/cards-group/cards-group.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path: '', component:BodyComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'herramientas', component:HerramientasComponent},
  {path: 'presentacion', component:PresentacionComponent},
  {path: 'linkedin', component:PresentacionComponent},
  {path: 'estudios', component:EstudiosComponent},
  {path: 'contacto', component:ContactoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ButtonComponent,
    LogoComponent,
    CardComponent,
    CardsGroupComponent,
    PresentacionComponent,
    DescripcionComponent,
    ProyectosComponent,
    HerramientasComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
