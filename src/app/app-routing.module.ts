import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { ResourceGuard } from './guard/resource.guard';
import { ManageComponent } from './layouts/manage/manage.component';
import { ManageGuard } from './guard/manage.guard';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: BlankComponent,
  //   // redirectTo: 'site'
  // },
  {
    path: 'site',
    component: FullComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule),
        // canActivate: [LoginGuard]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard',
    component: ManageComponent,
    canActivate: [ResourceGuard],
    children: [
      {
        path: 'my-pets',
        loadChildren: () => import('./pages/my-pets/my-pets.module').then(mod => mod.MyPetsModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ],
    data: {
      expectedRol: ['admin', 'user']
    }
  },
  {
    path: '**',
    redirectTo: 'site'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
