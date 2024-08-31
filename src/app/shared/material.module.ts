import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class MaterialModule { }
