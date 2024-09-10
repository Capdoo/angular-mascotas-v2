import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpperTextOnlyDirective } from '../../shared/directives/upper-text-only.directive';
import { TextOnlyDirective } from '../../shared/directives/text-only.directive';
import { NumbersOnlyDirective } from '../../shared/directives/numbers-only.directive';
import { LoginGuard } from '../../guard/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UpperTextOnlyDirective,
    TextOnlyDirective,
    NumbersOnlyDirective
  ],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule { }
