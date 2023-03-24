import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SesionComponent } from './componentes/sesion/sesion.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ServServicioService } from './servicios/serv-servicio.service';
import { HttpClientModule } from "@angular/common/http";
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { DetalleServicioComponent } from './componentes/detalle-servicio/detalle-servicio.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';


const appRutas:Routes= [
  {path: '', component:HomeComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'sesion', component:SesionComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'detalle-servicio/:id', component:DetalleServicioComponent},
  {path: 'reserva/:id', component:ReservaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    SesionComponent,
    ServiciosComponent,
    PerfilComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    DetalleServicioComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRutas, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    FormsModule
  ],
  providers: [ServServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
