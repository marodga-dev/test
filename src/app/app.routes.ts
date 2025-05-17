import { Routes } from '@angular/router';
import { IntroduccionComponent } from './secciones/introduccion/introduccion.component';
import { TarifasComponent } from './secciones/tarifas/tarifas.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/introduccion', pathMatch: 'full' },
  { path: 'introduccion', component: IntroduccionComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'contacto', component: ContactoComponent }
];

