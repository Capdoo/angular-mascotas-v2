import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { PetsRoutingModule } from './pets-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
