import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { ResourceGuard } from './guard/resource.guard';
import { ManageComponent } from './layouts/manage/manage.component';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

const routes: Routes = [
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
        path: '',
        component: DashboardComponent
      },
      {
        path: 'my-pets',
        loadChildren: () => import('./pages/my-pets/my-pets.module').then(mod => mod.MyPetsModule),
      },
      {
        path: 'pets',
        loadChildren: () => import('./pages/pets/pets.module').then(mod => mod.PetsModule),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ],
    data: {
      expectedRol: ['admin', 'user']
    }
  },
  {
    path: '**',
    redirectTo: 'site',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
