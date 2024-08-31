import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: FullComponent,
  // },
  {
    path: '',
    component: FullComponent,
    canActivate: [],
    children: [
      {
        path: 'pets',
        loadChildren: () => import('./pages/pets/pets.module').then(mod => mod.PetsModule),
        canActivate: []
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
        canActivate: []
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule),
        canActivate: []
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
