import { Routes } from '@angular/router';


export const routes: Routes =  [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
  },
  {
    path: 'trending',
    loadComponent: () => import('')
  },
  {
    path: 'search',
    loadComponent: () => import('')
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]