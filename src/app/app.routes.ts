import type { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'skills', loadComponent: () => import('./skills/skills').then(m => m.Skills) },
  { path: 'projects', loadComponent: () => import('./projects/projects').then(m => m.Projects) },
  { path: 'experience', loadComponent: () => import('./experience/experience').then(m => m.Experience) },
  { path: 'achievements', loadComponent: () => import('./achievements/achievements').then(m => m.Achievements) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
  // No navbar route needed here; navbar is part of layout
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
