import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrimengModule } from '../shared/primeng.module';
import { MenuMaterialComponent } from './menu-material/menu-material.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    MenuMaterialComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    MenuMaterialComponent,
    FooterComponent
  ]
})
export class CoreModule { }
