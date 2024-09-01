import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),


  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
