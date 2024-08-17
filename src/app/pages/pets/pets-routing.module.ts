import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {
    path: '',
    component: PetsComponent,
    data: {
      title: 'Pets',
      description: 'V1.0.0'
    }
  }
];

@NgModule({
  declarations: [
    PetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class PetsRoutingModule { }

