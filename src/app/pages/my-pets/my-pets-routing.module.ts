import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyPetsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    MyPetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class MyPetsRoutingModule {



}
