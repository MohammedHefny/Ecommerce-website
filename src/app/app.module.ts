import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { EnvironmentComponent } from '../environments/environment.component'
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    CartsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
