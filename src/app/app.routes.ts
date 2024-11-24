import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'gfnc',
    loadComponent: () => import('./gfnc/gfnc.page').then( m => m.GfncPage)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  }
];
