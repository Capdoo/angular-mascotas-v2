import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { CoreModule } from './core/core.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthRoutingModule } from './pages/auth/auth-routing.module';

import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { ManageComponent } from './layouts/manage/manage.component';
import { MaterialModule } from './shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuListItemComponent } from './layouts/components/menu-list-item/menu-list-item.component';
import { TableComponent } from './layouts/components/table/table.component';
import { LoginGuard } from './guard/login.guard';
import { ResourceGuard } from './guard/resource.guard';
import { ManageGuard } from './guard/manage.guard';
import { HomeModule } from './pages/home/home.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { interceptorProvicer } from './interceptor/resource-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    ManageComponent,
    MenuListItemComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    HomeModule,
    DashboardModule
  ],
  providers: [
    // provideClientHydration(),
    provideAnimationsAsync(),
    LoginGuard,
    ResourceGuard,
    ManageGuard,
    interceptorProvicer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
