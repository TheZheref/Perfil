import { Component } from '@angular/core';
import { AplicacionesComponent } from '../aplicaciones/aplicaciones.component';

import { FooterComponent } from '../footer/footer.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { InicioComponent } from '../inicio/inicio.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AplicacionesComponent, FooterComponent, InformacionComponent, InicioComponent,
  HabilidadesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  Username = 'Jaidiver Bernal Ramos'
  isLoggedIn= false;


  greet(){
    alert('Hola!!!');
  }


}
