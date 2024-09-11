import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpperTextOnlyDirective } from '../../shared/directives/upper-text-only.directive';
import { TextOnlyDirective } from '../../shared/directives/text-only.directive';
import { NumbersOnlyDirective } from '../../shared/directives/numbers-only.directive';
import { StepperComponent } from './components/stepper/stepper.component';
import { AGeneralInfoComponent } from './new-pet/stages/a-general-info/a-general-info.component';
import { BOptionalInfoComponent } from './new-pet/stages/b-optional-info/b-optional-info.component';
import { CImageInfoComponent } from './new-pet/stages/c-image-info/c-image-info.component';

const routes: Routes = [
  {
    path: 'new-pet',
    component: NewPetComponent
  },
  {
    path: 'my-pets',
    component: MyPetsComponent,
  },
  {
    path: '**',
    redirectTo: 'my-pets'
  }
];

@NgModule({
  declarations: [
    NewPetComponent,
    MyPetsComponent,
    StepperComponent,
    AGeneralInfoComponent,
    BOptionalInfoComponent,
    CImageInfoComponent
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
export class PetsRoutingModule { }

