import { VillaRoutingModule } from './villas/villas-routing.moule';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAuthComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    VillaRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
