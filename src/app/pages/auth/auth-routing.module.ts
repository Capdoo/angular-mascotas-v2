import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      description: 'V1.0.0'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Login',
      description: 'V1.0.0'
    }
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule { }
