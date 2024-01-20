import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'destino',
    pathMatch: 'full',
  },
  {
    path: 'destino',
    loadComponent: () => import('./destino/destino.page').then( m => m.DestinosPage)
  },
  {
    path: 'modal-1',
    loadComponent: () => import('./modal-1/modal-1.page').then( m => m.Modal1Page)
  },
];
