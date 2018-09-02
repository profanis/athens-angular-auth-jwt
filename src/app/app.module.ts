import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FakeBackendInterceptor } from './core/fake-backend-interceptor.service';
import { AuthModule } from './features/auth/auth.module';
import { HotelModule } from './features/hotel/hotel.module';
import { MuseumModule } from './features/museum/museum.module';
import { TokenInterceptor } from './core/http-token-interceptor.service';

const appRoutes: Routes = [
  // { path: "",  redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HotelModule,
    MuseumModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
