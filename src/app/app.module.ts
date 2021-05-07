import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {Post} from './../services/post';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
  ],
  providers:[
    Post,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}
  ],
  bootstrap: [AppComponent],
})
///
export class AppModule {}
