import { ReservationModule } from './reservation/reservation.module';
import { FormsModule } from '@angular/forms';
import { LogginResolver } from './loggin.resolver';
import { AuthLoggedGuard } from './auth-logged.guard';
import { CoreModule } from './core/core.module';
import { VillasModule } from './villas/villas.module';
import { VillaRoutingModule } from './villas/villas-routing.moule';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { UserModule } from './user/user.module';
import { Interceptor } from './interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/card/card.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAuthComponent,
    NavigationComponent,
    CardComponent
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    // VillaRoutingModule,
    AppRoutingModule,
    VillasModule,
    UserModule,
    ReservationModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    AuthLoggedGuard,
    LogginResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
