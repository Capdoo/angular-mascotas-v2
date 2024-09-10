import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrimengModule } from '../shared/primeng.module';
import { MenuMaterialComponent } from './menu-material/menu-material.component';
import { MaterialModule } from '../shared/material.module';
import { MenuManageComponent } from './menu-manage/menu-manage.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    MenuMaterialComponent,
    MenuManageComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    MenuMaterialComponent,
    MenuManageComponent,
    FooterComponent
  ]
})
export class CoreModule { }
