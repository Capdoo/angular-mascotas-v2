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


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
