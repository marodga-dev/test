import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: 'introduccion', loadComponent: () => import('./secciones/introduccion/introduccion.component').then(m => m.IntroduccionComponent) },
  { path: 'tarifas', loadComponent: () => import('./secciones/tarifas/tarifas.component').then(m => m.TarifasComponent) },
  { path: 'contacto', loadComponent: () => import('./secciones/contacto/contacto.component').then(m => m.ContactoComponent) },
  { path: '**', redirectTo: 'introduccion' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 60]  // altura del header fijo
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
