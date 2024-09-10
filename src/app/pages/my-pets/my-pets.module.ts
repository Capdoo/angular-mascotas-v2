import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { MyPetsRoutingModule } from './my-pets-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MyPetsRoutingModule
  ]
})
export class MyPetsModule { }
