import { VillasModule } from './villas/villas.module';
import { VillaRoutingModule } from './villas/villas-routing.moule';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { UserModule } from './user/user.module';

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
    // VillaRoutingModule,
    AppRoutingModule,
    VillasModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
